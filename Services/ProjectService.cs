using Microsoft.EntityFrameworkCore;
using EJGPortfolio.Data;
using EJGPortfolio.Models.DTOs;

namespace EJGPortfolio.Services;

public class ProjectService : IProjectService
{
    private readonly AppDbContext _db;

    // .NET injects AppDbContext automatically
    // You never call "new ProjectService()" yourself
    // The DI container handles object creation
    public ProjectService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<IEnumerable<ProjectDto>> GetAllAsync()
    {
        // AsNoTracking = we're only reading, not updating
        // Skips EF Core's change tracking overhead
        // Always use on read-only queries for better performance
        return await _db.Projects
            .AsNoTracking()
            .Where(p => p.IsVisible)
            .OrderBy(p => p.DisplayOrder)
            .Select(p => new ProjectDto(
                p.Id,
                p.Title,
                p.Description,
                p.LiveUrl,
                p.GitHubUrl,
                p.TechStack,
                p.DisplayOrder
            ))
            .ToListAsync();
    }

    public async Task<ProjectDto?> GetByIdAsync(int id)
    {
        return await _db.Projects
            .AsNoTracking()
            .Where(p => p.Id == id && p.IsVisible)
            .Select(p => new ProjectDto(
                p.Id,
                p.Title,
                p.Description,
                p.LiveUrl,
                p.GitHubUrl,
                p.TechStack,
                p.DisplayOrder
            ))
            .FirstOrDefaultAsync();
    }
}