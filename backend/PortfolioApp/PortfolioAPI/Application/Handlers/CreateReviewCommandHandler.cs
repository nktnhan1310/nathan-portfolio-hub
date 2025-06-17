using MediatR;
using PortfolioAPI.Commands;
using PortfolioAPI.Domain.Entities;

namespace PortfolioAPI.Application.Handlers
{
    public class CreateReviewCommandHandler : IRequestHandler<CreateReviewCommand, Review>
    {
        private readonly AppDbContext _context;

        public CreateReviewCommandHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Review> Handle(CreateReviewCommand request, CancellationToken cancellationToken)
        {
            var review = new Review
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Rating = request.Rating,
                Comment = request.Comment,
                CreatedAt = DateTime.UtcNow
            };

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync(cancellationToken);
            return review;
        }
    }
}