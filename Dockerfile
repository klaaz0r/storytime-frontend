FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Clone ther storytime repo
RUN git clone https://github.com/klaaz0r/storytime-frontend.git

RUN mv storytime-frontend/* .
RUN apt-get update nodejs
RUN apt-get update npm
RUN npm install gulp -g

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
