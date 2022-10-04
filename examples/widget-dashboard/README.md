# Widget Dashboard

A widget-based dashboard application bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://widget-dashboard.vercel.app/

## Description

An Aurelia 2 application showcasing the use of CSS Modules and component composition. You will also see how you can use composition to create dynamic user interfaces with Aurelia.

## Features:

- Plain CSS
- CSS Modules for styling
- Use of `au-compose` for dynamic composition
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
