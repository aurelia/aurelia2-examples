# Aurelia 2 Animation Native

An Aurelia 2 application with native Web Animations API animations, bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://animation-native.vercel.app/

## Description

In this example application you will see how easy it is to leverage the Web Animations API to add animations into your Aurelia 2 applications. You will also be introduced to the Motion library which wraps the Web Animations API and gives you nicer syntax and animation options.

## Features:

- Plain CSS
- TypeScript
- Web Animations API
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
