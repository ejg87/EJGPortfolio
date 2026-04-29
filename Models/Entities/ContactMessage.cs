namespace EJGPortfolio.Models.Entities;

public class ContactMessage
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string Email { get; set; }

    public required string Message { get; set; }

    public DateTime SentAt { get; set; } = DateTime.UtcNow;

    // Track whether you've read it
    public bool IsRead { get; set; } = false;
}