# Aurelia 2 Lambda Expressions

An Aurelia 2 application that shows how to leverage lambda expressions in your Aurelia applications, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-lambda-expressions.vercel.app/

## Description

An Aurelia 2 application that shows how to leverage lambda expressions in your Aurelia applications. Discover ways to simplify use cases where you might think to use a value converter and other handy scenarios.

## Features:

- Plain CSS
- TypeScript
- Working with lambda epxressions
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
