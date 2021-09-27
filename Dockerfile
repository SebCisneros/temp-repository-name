FROM node:16

ENV HOME /root

WORKDIR /root

COPY . .

WORKDIR /root/frontend

RUN npm install

EXPOSE 3000

CMD npm run start

