using MediatR;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Application.Queries;
using PortfolioAPI.Commands;

var builder = WebApplication.CreateBuilder(args);

var server = Environment.GetEnvironmentVariable("Server");
var port = Environment.GetEnvironmentVariable("Port");
var database = Environment.GetEnvironmentVariable("Database");
var userId = Environment.GetEnvironmentVariable("UserId");
var password = Environment.GetEnvironmentVariable("Password");

var connectionString = $"User Id={userId};Password={password};Server={server};Port={port};Database={database}";

// Configure EF Core with Supabase connection string
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<GetReviewsQuery>());
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<CreateReviewCommand>());

var app = builder.Build();

// Use Swagger middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS middleware
app.UseCors("AllowAll");

// GET: /reviews
app.MapGet("/reviews", async (IMediator mediator, int pageNumber = 1, int pageSize = 5) =>
{
    var result = await mediator.Send(new GetReviewsQuery(pageNumber, pageSize));
    return Results.Ok(result);
});

// POST: /reviews
app.MapPost("/reviews", async (IMediator mediator, ReviewDto dto) =>
{
    var command = new CreateReviewCommand(dto.Name, dto.Email, dto.Rating, dto.Comment);
    var review = await mediator.Send(command);
    return Results.Created($"/reviews/{review.Id}", review);
});

app.Run();

public record ReviewDto(string Name, string Email, int Rating, string Comment);