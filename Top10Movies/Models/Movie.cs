using System.ComponentModel.DataAnnotations;
using Top10Movies.CustomAttributes;

namespace Top10Movies.Models
{
    public class Movie
    {
        public string? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MovieCategoryValidation]
        public int MovieCategoryId { get; set; }
        [Required]
        [Range(1, 10, ErrorMessage = "Rank must be between 1 and 10")]
        public int Rank { get; set; }
        [Required]
        public string ImagePath { get; set; }
    }
}
