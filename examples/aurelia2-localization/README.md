# Aurelia 2 Localization

A localized Aurelia 2 application bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Demo

A demo of this application is running here: https://aurelia2-localization.vercel.app/

## Description

An application that shows how to work with the Aurelia i18n package. Going one step further, it also shows you how to configure the `i18next-fetch-backend` package to load locale files on demand instead of bloating your bundle sizes. You'll see how to implement a language switcher, implement localization and display the values.

Please note in this example, a modification to the Webpack configuration has been made to ensure locale files are copied from the `src/locales` directory to the bundled directory on build. This uses the `copy-webpack-plugin` which has been installed.

## Features:

- Plain CSS
- TypeScript
- Aurelia i18n package for localization
- Implementation of backend plugin to implement on-demand loading of locale files
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
