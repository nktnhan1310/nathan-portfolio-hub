using MediatR;
using PortfolioAPI.Domain.Entities;

namespace PortfolioAPI.Commands
{
    public class CreateReviewCommand : IRequest<Review>, IBaseRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }

        // Constructor to fix CS1729 error  
        public CreateReviewCommand(string name, string email, int rating, string comment)
        {
            Name = name;
            Email = email;
            Rating = rating;
            Comment = comment;
        }
    }
}