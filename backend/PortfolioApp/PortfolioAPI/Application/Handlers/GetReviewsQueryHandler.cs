using MediatR;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Application.Queries;
using PortfolioAPI.Application.Results;

namespace PortfolioAPI.Application.Handlers
{
    public class GetReviewsQueryHandler : IRequestHandler<GetReviewsQuery, PagedReviewsResult>
    {
        private readonly AppDbContext _context;

        public GetReviewsQueryHandler(AppDbContext context)
        {
            _context = context;
        }

        public async Task<PagedReviewsResult> Handle(GetReviewsQuery request, CancellationToken cancellationToken)
        {
            var totalItems = await _context.Reviews.CountAsync(cancellationToken);
            var totalPages = (int)Math.Ceiling(totalItems / (double)request.PageSize);

            var items = await _context.Reviews
                .OrderByDescending(r => r.CreatedAt)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            return new PagedReviewsResult
            {
                Items = items,
                TotalItems = totalItems,
                TotalPages = totalPages,
                CurrentPage = request.PageNumber
            };
        }
    }
}