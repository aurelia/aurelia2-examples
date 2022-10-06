# Aurelia 2 Attribute Patterns

An Aurelia 2 application with custom attribute patterns, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-attribute-patterns.vercel.app/

## Description

In this example application, you will learn an advanced concept. The ability to configure Aurelia's templating syntax to support syntax of other frameworks like Vue or Angular.

## Features:

- Plain CSS
- TypeScript
- Attribute Patterns API
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
