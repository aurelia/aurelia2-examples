# .NET 6 SPA with Aurelia 2 Example:

To use the SPA proxy in .net the SPA server should be launched with:
```
> cd examples\aurelia2-net6\ClientApp
> pnpm install &&  pnpm start
```
Then the server application should be launched with:
```
> cd ..
> dotnet run
```


## SPA proxy notes (in development Env):
- SPA in .net project proxy is configured in csproj (SpaRoot elements)
- Aurelia application port is configured in webpack.config.js (devServer )
- to allow api calls reach server, /api paths shold be configured in webpack.config.js (proxy element)



