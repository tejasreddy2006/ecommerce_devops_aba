FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# API URL for browser requests from host machine
ENV REACT_APP_API_URL=http://localhost:5000

EXPOSE 3000

CMD ["npm", "start"]
