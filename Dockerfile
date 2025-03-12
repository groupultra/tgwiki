FROM node:20.11.1

WORKDIR /app-riffo

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]
