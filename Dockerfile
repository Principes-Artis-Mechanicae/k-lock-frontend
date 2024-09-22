FROM node:20-alpine3.18

RUN mkdir /gracker-web
WORKDIR /gracker-web
COPY . /gracker-web
ENV PATH /gracker-web/node_modules/.bin:$PATH

RUN npm install --silent

USER root
RUN npm install -g serve --save
RUN npm run build
CMD ["npm", "run", "deploy"]
