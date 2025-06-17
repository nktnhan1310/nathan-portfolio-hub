# Stage 1: base runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:$PORT

# Stage 2: build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY backend/PortfolioApp/PortfolioApp.csproj PortfolioApp/
RUN dotnet restore PortfolioApp/PortfolioApp.csproj
COPY backend/PortfolioApp/. PortfolioApp/
WORKDIR /src/PortfolioApp
RUN dotnet build -c Release -o /app/build

# Stage 3: publish
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

# Stage 4: final runtime
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PortfolioApp.dll"]
