using Microsoft.AspNetCore.Mvc;
using EJGPortfolio.Models.DTOs;
using EJGPortfolio.Services;

namespace EJGPortfolio.Controllers.Api;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public ContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    // POST api/contact
    // [ApiController] automatically reads JSON body and maps to ContactRequestDto
    // Data annotations on the DTO are validated before this method runs
    // If validation fails, .NET returns 400 automatically
    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactRequestDto dto)
    {
        var success = await _contactService.SaveMessageAsync(dto);

        if (!success)
            return StatusCode(500, new { message = "Failed to save message." });

        // 201 Created is the correct HTTP response for a successful POST
        return StatusCode(201, new { message = "Message received. Thanks!" });
    }
}