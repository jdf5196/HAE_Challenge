# Frontend Developer Assessment

## Installation

### Setting Up the Server

The only dependency to run this project is Docker. Instructions for installing Docker are here: https://docs.docker.com/install/

cd into the api/ directory

First, build the Docker image and seed test data:

`docker build -t candidate-api .`

Then, start the dev server on port 8000:

`docker run -p 8000:8000 candidate-api`

### Client Installation

cd into the client/ directory

Install dependencies with `yarn install` or `npm install`

Start the development server:

`yarn start` or `npm start`

This will start the dev server on port 3000.