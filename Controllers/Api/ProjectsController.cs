using Microsoft.AspNetCore.Mvc;
using EJGPortfolio.Services;

namespace EJGPortfolio.Controllers.Api;

// [ApiController] enables:
// - Automatic 400 responses for invalid model state
// - Automatic JSON binding from request body
// - Problem details format for errors
[ApiController]

// "api/[controller]" → "api/projects"
// [controller] is replaced with the class name minus "Controller"
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectService _projectService;

    // .NET injects IProjectService automatically
    // because we'll register it in Program.cs
    public ProjectsController(IProjectService projectService)
    {
        _projectService = projectService;
    }

    // GET api/projects
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var projects = await _projectService.GetAllAsync();
        return Ok(projects);
    }

    // GET api/projects/1
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var project = await _projectService.GetByIdAsync(id);

        if (project is null)
            return NotFound(new { message = $"Project {id} not found" });

        return Ok(project);
    }
}