using EJGPortfolio.Data;
using EJGPortfolio.Models.DTOs;
using EJGPortfolio.Models.Entities;

namespace EJGPortfolio.Services;

public class ContactService : IContactService
{
    private readonly AppDbContext _db;

    public ContactService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<bool> SaveMessageAsync(ContactRequestDto dto)
    {
        // Map DTO → Entity
        // Never let the client send a raw entity
        // DTOs control exactly what data enters the system
        // This prevents mass assignment attacks
        var message = new ContactMessage
        {
            Name = dto.Name,
            Email = dto.Email,
            Message = dto.Message,
            SentAt = DateTime.UtcNow,
            IsRead = false
        };

        _db.ContactMessages.Add(message);

        // SaveChangesAsync returns rows affected
        // Greater than 0 means something was saved
        var saved = await _db.SaveChangesAsync();
        return saved > 0;
    }
}