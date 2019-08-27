FROM node:8
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /

COPY package.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]


