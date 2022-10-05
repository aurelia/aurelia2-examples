# Aurelia 2 State

A todo application using the Aurelia State plugin bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-state.vercel.app/

## Description

See a working implementation of the Aurelia State plugin in an Aurelia todo application.

## Features:

- Plain CSS
- TypeScript
- Aurelia state plugin
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
