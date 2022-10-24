# .NET 6 SPA with Aurelia 2 Example:

To start open move to project folder in a console in project and write `dotnet run`.
..or open project in VS Code and press RUN.

## SPA proxy notes (in development Env):
- SPA in .net project proxy is configured in csproj (SpaRoot elements)
- Aurelia application port is configured in webpack.config.js (devServer )
- to allow api calls reach server, /api paths shold be configured in webpack.config.js (proxy element)



