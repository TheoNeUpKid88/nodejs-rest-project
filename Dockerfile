### STAGE 1: Build ###
# We label our stage as ‘builder’
FROM node:latest

# Configure Working Directory
RUN mkdir -p /usr/src/app

# Copy Source Code
COPY . /usr/src/app/

# Update System
RUN apt-get update

# Install Dependencies
RUN apt-get install -y htop ntp

WORKDIR /usr/src/app
RUN yarn global add nodemon && yarn install

ARG PORT
ENV PORT=${PORT}

# Expose ports
EXPOSE 80 443

# Configure command
ENTRYPOINT [ "yarn", "start" ]
