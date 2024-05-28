FROM node:16

RUN npm install -g ts-node
RUN npm install -g nodemon
ENV DB_HOST farms-db

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8091

CMD [ "nodemon", "index.ts" ]

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# docker rmi <image name>
# docker rm -f <container id>