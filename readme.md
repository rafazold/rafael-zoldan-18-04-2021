# Weather App
#### by Rafa Zoldan

### Description

A frontend weather app that uses React, Redux, Webpack, Tailwindcss. 

The project requires an API key for accuweather, the free plan is enough to run the project.

Features: Get the current weather for your current location, search for locations, add/remove from favorites, dark mode, save preferences to localStorage

### Install
`
yarn install
`
 
### Development

Before you can run the project locally you need to create a .env file in your root directory and include the following env variables
To run a webpack server with watch on changed files run

- API_BASE_URL
- NODE_ENV
- AW_API_KEY

`
yarn dev
`

To rebuild Tailwindcss run

`yarn build-css`

### Production
To make a production build run

`
yarn build
`

### Deploy

`yarn deploy`

This command runs all needed to deploy the project: 
- set node version (needs to have local "n" package installed)
- build the project
- deploy to firebase (requires to be logged in to firebase with an authorized account)

### Demo:
[Weather App](https://weather-app-rafa.web.app)