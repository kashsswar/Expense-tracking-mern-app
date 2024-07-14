# server/Dockerfile

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port (assuming it's 5000)
EXPOSE 5000

# Define the command to run the backend
CMD ["npm", "start"]
