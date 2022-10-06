# Aurelia 2 @watch

An Aurelia 2 application that shows how to use the @watch decorator to observe expressions and properties, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://using-watch.vercel.app/

## Description

An Aurelia application that shows how you can leverage the powerful @watch decorator to observe values, as well as expressions inside of your applications and react to them.

## Features:

- Plain CSS
- TypeScript
- Working with the Aurelia @watch decorator
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
