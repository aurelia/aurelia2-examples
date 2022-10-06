# Aurelia 2 Emotion (CSS-in-JS)

An Aurelia 2 application with Emotion CSS-in-JS configured, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-emotion.vercel.app/

## Description

In this example, we use the Emotion CSS-in-JS library to implement CSS-in-JS functionality into our Aurelia applications. We create a custom attribute and use it to bind our styles to make the library easier to use in our Aurelia applications.

## Features:

- Plain CSS
- TypeScript
- Emotion library for CSS-in-JS
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
