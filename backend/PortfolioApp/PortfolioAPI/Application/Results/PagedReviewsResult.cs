using PortfolioAPI.Domain.Entities;
using System.Collections.Generic;

namespace PortfolioAPI.Application.Results
{
    public class PagedReviewsResult
    {
        public List<Review> Items { get; set; } = [];
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
    }
}