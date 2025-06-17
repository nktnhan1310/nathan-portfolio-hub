# 1. Base runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:$PORT

# 2. Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY backend/PortfolioApp/PortfolioAPI/PortfolioAPI.csproj PortfolioAPI/
RUN dotnet restore PortfolioAPI/PortfolioAPI.csproj

COPY backend/PortfolioApp/PortfolioAPI/. PortfolioAPI/
WORKDIR /src/PortfolioAPI
RUN dotnet build -c Release -o /app/build

# 3. Publish stage
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish

# 4. Final runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PortfolioAPI.dll"]
