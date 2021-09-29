FROM node:16

ENV HOME /root

WORKDIR /root

COPY ["frontend/package.json", "frontend/package-lock.json", "./"]

WORKDIR /root/frontend

RUN npm install

EXPOSE $PORT

CMD npm run start

