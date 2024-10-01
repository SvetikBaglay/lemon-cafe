docker build -t lemon-cafe ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 lemon-cafe:latest bash 
npm start


another bash(for test example)
raningDocker =>
docker ps -l
 
docker exec -it IDCONTAINER bash
npm test



create with ts newproject
npx create-react-app my-app --template typescript
