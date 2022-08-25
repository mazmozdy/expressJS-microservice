FROM node:14.0.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package-lock.json and package.json
# Install app dependencies
COPY package*.json ./
RUN npm install

# Build app source
COPY . .

EXPOSE 3000

# Command that runs the app.
CMD [ "npm", "run", "start" ]