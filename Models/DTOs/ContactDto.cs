using System.ComponentModel.DataAnnotations;

namespace EJGPortfolio.Models.DTOs;

// What React SENDS when the contact form submits
// No Id, no SentAt, no IsRead — client never controls those
public record ContactRequestDto(
    [Required]
    [StringLength(100, MinimumLength = 2)]
    string Name,

    [Required]
    [EmailAddress]
    string Email,

    [Required]
    [StringLength(2000, MinimumLength = 10)]
    string Message
);