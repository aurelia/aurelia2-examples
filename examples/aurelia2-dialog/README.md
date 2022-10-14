# Dialog with Bootstrap modal css

An Aurelia 2 application bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-dialog.vercel.app/

## Description

A simplistic application that shows how to work with the router in Aurelia 2. No fancy tricks, just basic routing using the `@aurelia/router` package. We register the router, but don't touch any of its default settings. As a result, you get hash-based routing by default.

## Features:

- Plain CSS
- Routing
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
