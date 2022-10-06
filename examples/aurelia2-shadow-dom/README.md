# Aurelia 2 Shadow DOM

An Aurelia 2 application showing you how to work with Shadow DOM, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-shadow-dom.vercel.app/

## Description

In this example application, you'll learn how to work with Shadow DOM for encapsulating styles in your Aurelia applications. Shadow DOM is a native standards-based way to keep styles self-contained. We also show how you can use libraries like Bootstrap which leverage global styles.

## Features:

- Plain CSS
- TypeScript
- Shadow DOM
- Adaptive Stylesheets
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
