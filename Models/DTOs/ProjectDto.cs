namespace EJGPortfolio.Models.DTOs;

// record = immutable, concise, perfect for DTOs that just carry data
// This is what React receives — clean, no internal fields
public record ProjectDto(
    int Id,
    string Title,
    string Description,
    string? LiveUrl,
    string? GitHubUrl,
    string? TechStack,
    int DisplayOrder
);