@echo off

docker compose -f compose.preview.yml up --build -d

if errorlevel 1 (
    echo.
    echo Erro ao iniciar o preview.
    exit /b 1
)

echo.
echo Trinity Website:
echo http://localhost:8080