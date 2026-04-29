namespace EJGPortfolio.Models.Entities;

public class Project
{
    // Primary key — EF Core recognizes "Id" by convention
    public int Id { get; set; }

    // required = NOT NULL in the database
    public required string Title { get; set; }

    public required string Description { get; set; }

    // Nullable = this column allows NULL
    // Not every project has a live URL
    public string? LiveUrl { get; set; }

    public string? GitHubUrl { get; set; }

    
    public string? TechStack { get; set; }

    // Always store UTC — never local time in a database
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Controls the order projects appear on the page
    public int DisplayOrder { get; set; } = 0;

    // Lets you hide a project without deleting it
    public bool IsVisible { get; set; } = true;
}