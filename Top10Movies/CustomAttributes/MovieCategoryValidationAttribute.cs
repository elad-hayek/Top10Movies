using System.ComponentModel.DataAnnotations;
using Top10Movies.Models;
using Top10Movies.Services;

namespace Top10Movies.CustomAttributes
{
    public class MovieCategoryValidationAttribute : ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            var  moviesService = (IMoviesService)validationContext.GetService(typeof(IMoviesService));
            var movie = (Movie)validationContext.ObjectInstance;
            List<MovieCategory> categories = moviesService.GetMovieCategories().ToList();

            if(categories.Any(x=>x.Id == movie.MovieCategoryId)) 
                return ValidationResult.Success;
            return new ValidationResult("The movie category doesn't exists");
        }
    }
}
