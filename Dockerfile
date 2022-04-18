FROM node:lts-alpine

COPY . /home/node
WORKDIR /home/node

RUN npm i --production
#RUN npm i && npm run build

CMD ["npm", "start"]