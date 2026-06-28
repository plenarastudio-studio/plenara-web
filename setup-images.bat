@echo off
echo ==========================================
echo   ARCHAUS Studio - Image Setup
echo ==========================================
echo.
if not exist "D:\WebApp\images" mkdir "D:\WebApp\images"
set S=C:\Users\Rakshit.Sharma\.gemini\antigravity\brain\a6cc264b-5db9-415b-b9ed-bdd54b3ff054
copy "%S%\hero_editorial_1777109239242.png" "D:\WebApp\images\hero.png" /Y
copy "%S%\about_portrait_1777109365853.png" "D:\WebApp\images\about.png" /Y
copy "%S%\project_kitchen_1777109253782.png" "D:\WebApp\images\kitchen.png" /Y
copy "%S%\project_bedroom_1777109269425.png" "D:\WebApp\images\bedroom.png" /Y
copy "%S%\project_exterior_1777109285111.png" "D:\WebApp\images\exterior.png" /Y
copy "%S%\project_bathroom_1777109300007.png" "D:\WebApp\images\bathroom.png" /Y
copy "%S%\project_office_1777109324402.png" "D:\WebApp\images\office.png" /Y
copy "%S%\project_dining_1777109350731.png" "D:\WebApp\images\dining.png" /Y
copy "%S%\project_lounge_1777109381673.png" "D:\WebApp\images\lounge.png" /Y
echo.
echo   All 9 images copied!
echo   Open D:\WebApp\index.html in your browser.
echo ==========================================
pause
