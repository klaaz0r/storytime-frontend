FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/
WORKDIR /usr/src/


COPY storytime-frontend/ /usr/src/

#Open port 8081
EXPOSE 8081
CMD [ "npm", "start" ]
