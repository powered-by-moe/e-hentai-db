FROM node:lts-alpine

COPY . /home/node/app
WORKDIR /home/node/app

#RUN npm i --production
RUN npm i && npm run build

CMD ["npm", "start"]