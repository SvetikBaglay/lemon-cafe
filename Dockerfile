FROM node:lts
WORKDIR /app
RUN npm install react-scripts@latest
EXPOSE 3000
CMD ["npm", "start"]
