FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/
WORKDIR /usr/src/

#build the project on the server before moving to the container
COPY storytime-frontend/ /usr/src/

#Open port 8081
EXPOSE 8081
CMD [ "npm", "start" ]
