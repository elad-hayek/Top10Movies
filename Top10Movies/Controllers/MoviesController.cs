using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Top10Movies.Models;
using Top10Movies.Services;

namespace Top10Movies.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesService _moviesService;

        public MoviesController(IMoviesService moviesService)
        {
            this._moviesService = moviesService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
               var movies = _moviesService.GetMovies();
                if (movies == null)
                    return NoContent();
                return Ok(movies);
            }
            catch (Exception e) 
            {
                return StatusCode(500); 
            }

        }

        [HttpGet]
        [Route("get_movie_categories")]
        public IActionResult GetMovieCategories()
        {
            try
            {
                var movieCategories = _moviesService.GetMovieCategories();
                if (movieCategories == null)
                    return NoContent();
                return Ok(movieCategories);
            }
            catch(Exception e) 
            {
               
                return StatusCode(500);
                
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            try
            {
                _moviesService.AddMovie(movie);
                var movies = _moviesService.GetMovies();
                if (movies == null)
                    return NoContent();
                return Ok(movies);
            }
            catch (Exception e) 
            {
                if(e.GetType() == typeof(DuplicateNameException))
                    return Conflict(e.Message);
                return StatusCode(500);
            }
            
        }

        [HttpPut]
        public IActionResult Put([FromQuery] string id, [FromBody] Movie movie)
        {
            try
            {
                _moviesService.UpdateMovie(id, movie);
                var movies = _moviesService.GetMovies();
                if (movies == null)
                    return NoContent();
                return Ok(movies);
            }
            catch(Exception e)
            {
                if(e.GetType() == typeof(DataException))
                    return NotFound(e.Message);
                else if (e.GetType() == typeof(DuplicateNameException))
                    return Conflict(e.Message);
                return StatusCode(500);       
            }
        }

        [HttpDelete]
        public IActionResult Delete([FromQuery] string id)
        {
            try
            {
                _moviesService.DeleteMovie(id);
                var movies = _moviesService.GetMovies();
                if (movies == null)
                    return NoContent();
                return Ok(movies);
            }
            catch (Exception e)
            {
                if (e.GetType() == typeof(DataException))
                    return NotFound(e.Message);
                return StatusCode(500);
            }
        }

    }
}
