@echo off
echo ========================================
echo TOYOTA WEBSITE - QUICK START
echo ========================================
echo.

echo [1/4] Setting up Backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
echo.

echo [2/4] Creating superuser (for admin panel)...
python manage.py createsuperuser
echo.

echo [3/4] Setting up Frontend...
cd ..\frontend
call npm install
echo.

echo [4/4] Setup Complete!
echo.
echo ========================================
echo TO START THE PROJECT:
echo ========================================
echo.
echo Backend (Terminal 1):
echo   cd backend
echo   venv\Scripts\activate
echo   python manage.py runserver
echo.
echo Frontend (Terminal 2):
echo   cd frontend
echo   npm run dev
echo.
echo Admin Panel: http://localhost:8000/admin
echo Frontend: http://localhost:5173
echo ========================================
pause
