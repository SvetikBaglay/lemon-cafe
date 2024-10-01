docker build -t lemon-cafe ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 lemon-cafe:latest bash 
npm start


create with ts npx create-react-app my-app --template typescript
