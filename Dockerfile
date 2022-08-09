FROM node

RUN npm i -g nodemon

WORKDIR /app

CMD ["nodemon", "index.js"]
