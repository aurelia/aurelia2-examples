# Aurelia 2 Metronome App

A metronome application bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://metronome-app.vercel.app/

## Description

A simplistic Aurelia 2 application that is about as standard as you can get. A metronome with input slider for setting the BPM.

## Features:

- Plain CSS
- TypeScript
- Working with native Audio API's
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
