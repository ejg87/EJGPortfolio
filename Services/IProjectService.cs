using EJGPortfolio.Models.DTOs;

namespace EJGPortfolio.Services;

// The interface defines the CONTRACT
// Controllers depend on this interface, not the concrete class
// This is Dependency Inversion — one of the SOLID principles
// It means you can swap implementations without touching controllers
public interface IProjectService
{
    // Returns all visible projects ordered by DisplayOrder
    Task<IEnumerable<ProjectDto>> GetAllAsync();

    // Returns a single project by ID, null if not found
    Task<ProjectDto?> GetByIdAsync(int id);
}