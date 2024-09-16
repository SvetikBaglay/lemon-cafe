docker build -t lemon-cafe ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 lemon-cafe:latest bash 
npm start



