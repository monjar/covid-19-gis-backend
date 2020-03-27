# Covid-19 GIS API

This API helps clients to check whether a point on map is on an infected area or not.
Originally this project is the first homework of Internet-Engineering class.

## API List

### 1. POST - /gis/addpolygon

> Adds an infected area to the app

### 2. GET - /gis/testpoint

> Checks whether a point on map is on an infected area or not.

## Demo

API is currently accessible on [Heroku](https://geo-crona-backend.herokuapp.com/)

## Architecture

This application ha a layered architecture that consists of Controllers, Services and Repositories.

#### Controllers

The controllers layer mainly consists of routes an exposes the API to client.

#### Services

The services is responsible for handling the logic and computational actions.

#### Repositories

The repositories layer handles data manipulation.

## Run app

To run the app on your computer you should follow these steps in your terminal:

1. Clone the project
   `git clone https://github.com/monjar/covid-19-gis-backend.git`
2. Go to project root
   `cd covid-19-gis-backend`
3. Create the ".env" file and set your port
   `echo 'PORT = 8080' >.env`
4. Install node modules
   `npm install`
   or
   `yarn install`
5. Start app
   `npm start`
   or
   `yarn start`

## Sample Requests

You can see sample requests in geo-crona-api.postman_collection.json file in resources folder and import it to Postman
