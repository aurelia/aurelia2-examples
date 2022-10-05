# Aurelia 2 Examples

A monorepository of a treasure trove of Aurelia 2 example applications you can use as a guide to help you build your own applications. Explore features, concepts and more.

## Running the examples

Pull this repository down and run `npm install` in the root directory to install the example dependencies. Then navigate to each `examples` folder application and run `npm start` to run the application.

## Examples

There are many examples in this repository. We have broken these up into categories for you.
### Concepts & Fundamentals

In this section, these examples show you how to do things with Aurelia such as working with routing or localization. These demos help newcomers and experienced developers alike get familiar with Aurelia concepts and libraries through a hands-on approach.

#### Simple Routing

It doesn't get any simpler than this. A basic application showing you how to implement routing in your Aurelia 2 applications. No trickery or configuration, see how to create an application with hash-based routing.

- [Source](examples/simple-routing) 
- [Demo](https://simple-routing.vercel.app/)

---

#### Advanced Routing

Covers deeper parts of routing in Aurelia 2. This application showcases child routing, lifecycle hooks, how to hide routes behind authentication and more. This application is a good guide if you're wanting to learn routing concepts in Aurelia 2.

- [Source](examples/advanced-routing) 
- [Demo](https://advanced-routing.vercel.app/)

---

#### Aurelia 2 State

Covers working with the versatile and powerful Aurelia 2 state plugin for state management. Covers concepts such as binding to input values, working with collections, mutating state values and more. This is a copy of the todo application from below but made to use the Store plugin.

- [Source](examples/aurelia2-state) 
- [Demo](https://aurelia2-state.vercel.app/)

---

#### Aurelia 2 State Persistence

How to implement persistent state in the Aurelia State plugin. A copy of the previous Aurelia 2 State example, with persistence, enabled out of the box. Make changes and refresh the page to see them persist.

- [Source](examples/aurelia2-state-persistence) 
- [Demo](https://aurelia2-state-persistence.vercel.app/)

---

#### Aurelia 2 Localization

An Aurelia application using the i18n package to implement localization functionality. In this application, you'll learn how to implement a language switcher to switch between locales as well as display locale values in your application.

- [Source](examples/aurelia2-localization) 
- [Demo](https://aurelia2-localization.vercel.app/)

---

#### Aurelia 2 Validation

An Aurelia application utilizing the Aurelia validation package. This application guides you through simple validation, child component inheritance validation, custom rules, displaying errors and other core validation concepts.

- [Source](examples/aurelia2-validation) 
- [Demo](https://aurelia2-validation.vercel.app/)

---

### Integrations

Integrations are third-party libraries and packages like Tailwind and CSS-in-JS solutions.

#### Aurelia 2 Tailwind

An Aurelia 2 application that showcases how to use TailwindCSS with Aurelia 2. Integration is handled during the build step inside of the PostCSS Loader configuration inside `webpack.config.js` and main base Tailwind styles are inside of `src/my-app.css`

- [Source](examples/aurelia2-tailwind) 
- [Demo](https://aurelia2-tailwind.vercel.app/)

---

### Apps & Fun

These applications are intended to show you how easy and fun it is to build small feature-based applications, while at the same time teaching you new things about Aurelia 2.

#### Aurelia 2 Todo

A simplistic todo application showcasing some binding features.

- [Source](examples/aurelia2-todo) 
- [Demo](https://aurelia2-todo.vercel.app/)

---

#### Crypto Price Tracker

An application showcasing how to interact with a third-party API to display real-time cryptocurrency updates. A great introduction to Aurelia's reactive binding system as well as the use of Bootstrap alongside Shadow DOM styling for components.

- [Source](examples/crypto-price-tracker) 
- [Demo](https://aurelia2-crypto-tracker.vercel.app/)

---

#### Widget Dashboard

An application showing dynamic composition using `au-compose` as well as creating a modular UI with interactivity and working with API's.

- [Source](examples/widget-dashboard) 
- [Demo](https://widget-dashboard.vercel.app/)

---

#### Metronome App

A fun Aurelia 2 metronome application. A simple slider determines the BPM of the metronome. We bind to the input and then use native Audio API's to play two different sounds based on the NPM interval calculated from the slider value.

- [Source](examples/metronome-app) 
- [Demo](https://metronome-app.vercel.app/)

---

#### QR Creator App

A fun Aurelia 2 QR creator application. Enter a URL and get a QR code in return. In this example, you will learn how to bind to a text input, how to use a third-party NPM package and bind an encoded image string to the `src` of an image.

- [Source](examples/qr-creator-app) 
- [Demo](https://qr-creator-app.vercel.app/)

---