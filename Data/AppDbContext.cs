using Microsoft.EntityFrameworkCore;
using EJGPortfolio.Models.Entities;

namespace EJGPortfolio.Data;

// DbContext is EF Core's main class
// It represents your session with the database
// Think of it as the bridge between your C# code and PostgreSQL
public class AppDbContext : DbContext
{
    // Constructor passes configuration up to the base DbContext
    // The options (connection string etc) come from Program.cs
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    // Each DbSet = one table in PostgreSQL
    // DbSet<Project> → "Projects" table
    // DbSet<ContactMessage> → "ContactMessages" table
    public DbSet<Project> Projects { get; set; }
    public DbSet<ContactMessage> ContactMessages { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed data — inserted on first migration
        // So your portfolio isn't empty on first deploy
        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = 1,
                Title = "RetroSpace",
                Description = "A MySpace-inspired social platform built with ASP.NET Core MVC, React, TypeScript, SASS and PostgreSQL.",
                GitHubUrl = "https://github.com/ejg87/RetroSpace",
                TechStack = "ASP.NET Core,.NET 10,React,TypeScript,PostgreSQL,SASS",
                DisplayOrder = 1,
                IsVisible = true,
                CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
            }
        );
    }
}