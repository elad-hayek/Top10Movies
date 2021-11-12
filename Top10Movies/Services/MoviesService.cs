using System.Reflection;
using Top10Movies.Models;
using System.Data;

namespace Top10Movies.Services
{
    public interface IMoviesService
    {
        public IEnumerable<Movie> GetMovies();
        public IEnumerable<MovieCategory> GetMovieCategories();
        public void AddMovie(Movie movie);
        public void DeleteMovie(string id);
        public void UpdateMovie(string id, Movie movie);
    }


    public class MoviesService : IMoviesService
    {
        private const string DB_FILE_NAME = "movies.json";
        private const string DB_CATEGORIES_FILE_NAME = "moviecategories.json";
        private readonly IDbHandlerService _dbHandlerService;

        public MoviesService(IDbHandlerService dbHandlerService)
        {
            this._dbHandlerService = dbHandlerService;
        }

        public IEnumerable<Movie> GetMovies()
        {
            return  _dbHandlerService.GetData<Movie>(DB_FILE_NAME).OrderBy(x => x.Rank);
        }
        public IEnumerable<MovieCategory> GetMovieCategories()
        {
            return _dbHandlerService.GetData<MovieCategory>(DB_CATEGORIES_FILE_NAME);
        }
        public void AddMovie(Movie movie)
        {
            List<Movie> movies = this.GetMovies().ToList();
            if (!movies.Any(x => x.Name == movie.Name))
            {
                // check if the rank exists
                if (movies.Any(x => x.Rank == movie.Rank))
                    UpdateMovieRanksforAdding(movies, movie);

                movie.Id = Guid.NewGuid().ToString();
                _dbHandlerService.AddData(DB_FILE_NAME, movie);
            }

            else
                throw new DuplicateNameException($"The movie {movie.Name} already exsists");
        }
        public void DeleteMovie(string id)
        {
            var movies = this.GetMovies();
            var movie = movies.FirstOrDefault(x => x.Id == id);
            if (movie != null)
            {
                _dbHandlerService.DeleteData(DB_FILE_NAME, movie, "Id");
                
            }
            else
                throw new DataException("The movie was not found");
        }
        public void UpdateMovie(string id, Movie movie)
        {
            List<Movie> movies = this.GetMovies().ToList();

            var dbMovie = movies.FirstOrDefault(x => x.Id == id);
            if (dbMovie != null)
            {
                // checks if there is another movie of the same name
                if (movies.FirstOrDefault(x => x.Name == movie.Name && x.Id != id) != null)
                    throw new DuplicateNameException($"The movie {movie.Name} already exsists");

                // check if the rank exists
                if (movies.Any(x => x.Rank == movie.Rank))
                    UpdateMovieRanksForUpdating(movies, dbMovie, movie);
                ChangeMovieSequence(movie, dbMovie);
            }

            else
                throw new DataException("The movie was not found");
        }

        private void ChangeMovieSequence(Movie newMovie, Movie dbMovie)
        {
            _dbHandlerService.DeleteData(DB_FILE_NAME, dbMovie, "Id");
            newMovie.Id = dbMovie.Id;
            _dbHandlerService.AddData(DB_FILE_NAME, newMovie);
        }
        private Movie CopyMovie(Movie movie, bool decreaseRank = false, bool increaseRank = false)
        {
            Movie newMovie = new Movie();
            newMovie.Id = movie.Id;
            newMovie.Name = movie.Name;
            newMovie.MovieCategoryId = movie.MovieCategoryId;
            newMovie.ImagePath = movie.ImagePath;

            if (decreaseRank && !increaseRank)
                newMovie.Rank = movie.Rank - 1;
            else if (increaseRank && !decreaseRank)
                newMovie.Rank = movie.Rank + 1;
            else
                newMovie.Rank = movie.Rank;
            return newMovie;
        }
        private void UpdateMovieRanksforAdding(List<Movie> movies, Movie newMovie)
        {
            // removes the last ranked movie
            var lastRankedMovie = movies.FirstOrDefault(x => x.Rank == 1);
            if(lastRankedMovie != null)
            {
                _dbHandlerService.DeleteData(DB_FILE_NAME, lastRankedMovie, "Id");
                movies.Remove(lastRankedMovie);
            }
            
            // decresces the rank of all the movies below the new movie
            foreach (Movie dbMovie in movies)
            {
                if (dbMovie.Rank <= newMovie.Rank)
                {
                    var movieWithChangedRank = CopyMovie(dbMovie, true);
                    ChangeMovieSequence(movieWithChangedRank, dbMovie);
                }
            }
        }
        private void UpdateMovieRanksForUpdating(List<Movie> movies, Movie oldMovie, Movie newMovie)
        {
            // if the new rank is higher then before
            if(newMovie.Rank > oldMovie.Rank)
            {
                foreach (Movie dbMovie in movies)
                {
                    if (dbMovie.Rank <= newMovie.Rank && dbMovie.Rank >= oldMovie.Rank)
                    {
                        var movieWithChangedRank = CopyMovie(dbMovie, true);
                        ChangeMovieSequence(movieWithChangedRank, dbMovie);
                    }
                }
            }
            // if the new rank is lower then before
            else
            {
                foreach (Movie dbMovie in movies)
                {
                    if (dbMovie.Rank >= newMovie.Rank && dbMovie.Rank <= oldMovie.Rank)
                    {
                        var movieWithChangedRank = CopyMovie(dbMovie, false, true);
                        ChangeMovieSequence(movieWithChangedRank, dbMovie);
                    }
                }
            }
        }
    }

}
