@echo off
setlocal

set "PHP_EXE="
for /f "delims=" %%P in ('where.exe php 2^>nul') do if not defined PHP_EXE set "PHP_EXE=%%P"

if not defined PHP_EXE (
    for /d %%D in ("%~dp0..\..\bin\php\php*") do (
        if not defined PHP_EXE if exist "%%~fD\php.exe" set "PHP_EXE=%%~fD\php.exe"
    )
)

if not defined PHP_EXE (
    echo PHP was not found. Start WampServer or add PHP to PATH, then try again.
    pause
    exit /b 1
)

start "MONI local server" "%PHP_EXE%" -S localhost:8000 -t "%~dp0"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8000/"
