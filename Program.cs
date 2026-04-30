using Microsoft.EntityFrameworkCore;
using EJGPortfolio.Data;
using EJGPortfolio.Services;

var builder = WebApplication.CreateBuilder(args);

// ── Services ────────────────────────────────────────────────

builder.Services.AddControllersWithViews();

// Register EF Core with PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Register services
// AddScoped = one instance created per HTTP request
// Request comes in → .NET creates the service → request ends → disposed
// Correct lifetime for anything that uses DbContext
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<IContactService, ContactService>();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new()
    {
        Title = "EJGPortfolio API",
        Version = "v1",
        Description = "Portfolio backend API"
    });
});

// CORS for Vite dev server
builder.Services.AddCors(options =>
{
    options.AddPolicy("DevPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

// ── Middleware Pipeline ──────────────────────────────────────

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "EJGPortfolio API v1");
        c.RoutePrefix = "swagger";
    });
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("DevPolicy");
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToController("Index", "Home");

app.Run();