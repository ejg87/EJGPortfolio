using Microsoft.EntityFrameworkCore;
using EJGPortfolio.Data;

var builder = WebApplication.CreateBuilder(args);

// ── Services ────────────────────────────────────────────────
// This section registers everything the app needs
// Think of it as telling .NET "here's everything that exists
// and how to create it when something asks for it"

// Adds MVC with Views — needed to serve the React shell page
builder.Services.AddControllersWithViews();

// Registers AppDbContext with PostgreSQL
// GetConnectionString looks in appsettings.json → ConnectionStrings → DefaultConnection
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Swagger — API docs and testing UI
// Only used in development, never expose in production
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

// CORS — allows Vite dev server to call our API during development
// In production React is served by .NET directly so CORS isn't needed
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
// Every HTTP request passes through this pipeline top to bottom
// Order matters — changing it breaks things

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "EJGPortfolio API v1");
        // Swagger UI lives at /swagger
        c.RoutePrefix = "swagger";
    });
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

// Serves static files from wwwroot
// Must come before UseRouting so static files are served without
// going through the MVC pipeline
app.UseStaticFiles();

app.UseRouting();

// CORS must come after UseRouting and before UseAuthorization
app.UseCors("DevPolicy");

app.UseAuthorization();

// Default MVC route — HomeController/Index serves the React shell
// The catch-all {*url} pattern means React Router handles all frontend URLs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// This catch-all ensures React Router works for deep links
// e.g. navigating directly to /projects doesn't 404
app.MapFallbackToController("Index", "Home");

app.Run();