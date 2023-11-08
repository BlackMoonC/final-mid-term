FROM node:16-alphine

WORKDIR /app

COPY package* .
RUN npm i

COPY . .

CMD ["npm", "run", "dev"]