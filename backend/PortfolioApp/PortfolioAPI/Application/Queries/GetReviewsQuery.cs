using MediatR;
using PortfolioAPI.Application.Results;

namespace PortfolioAPI.Application.Queries
{
    public class GetReviewsQuery : IRequest<PagedReviewsResult>
    {
        public int PageNumber { get; }
        public int PageSize { get; }

        public GetReviewsQuery(int pageNumber = 1, int pageSize = 10)
        {
            PageNumber = pageNumber < 1 ? 1 : pageNumber;
            PageSize = pageSize < 1 ? 10 : pageSize;
        }
    }
}