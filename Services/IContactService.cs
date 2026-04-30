using EJGPortfolio.Models.DTOs;

namespace EJGPortfolio.Services;

public interface IContactService
{
    // Returns true if message saved successfully
    Task<bool> SaveMessageAsync(ContactRequestDto dto);
}