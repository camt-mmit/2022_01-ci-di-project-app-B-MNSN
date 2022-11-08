FROM node:18

RUN mkdir -p /usr/app/client

WORKDIR /usr/app/client

COPY . .

# RUN npm install
# CMD npm start
CMD ["npm","run","start"]