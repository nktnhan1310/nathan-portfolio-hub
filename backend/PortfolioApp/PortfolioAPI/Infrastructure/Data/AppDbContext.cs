using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Domain.Entities;

public class AppDbContext : DbContext
{
    public DbSet<Review> Reviews { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}