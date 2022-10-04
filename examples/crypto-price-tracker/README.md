# Crypto Price Tracker

A crypto price tracker application bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Description

An Aurelia 2 application showcasing the use of vanilla CSS and Shadow DOM for styling. This example also uses Bootstrap 5 for styling, and you can see how Bootstrap 5 is integrated into the application. This example showcases how you can communicate with an API using the Aurelia Fetch Client and using a service to store your API code for reuse throughout your application.

## Features:

- Plain CSS
- ShadowDOM for modularized component styles
- Integration of third-party Bootstrap 5 library
- Use of Aurelia Fetch Client to make requests to an API
- TypeScript
- Webpack for bundling

## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```

## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch


## Analyze webpack bundle

    npm run analyze
