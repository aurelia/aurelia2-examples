# Aurelia 2 Examples

A monorepository of a treasure trove of Aurelia 2 example applications you can use as a guide to help you build your own applications. Explore features, concepts and more.

## Running the examples

Pull this repository down and run `npm install` in the root directory to install the example dependencies. Then navigate to each `examples` folder application and run `npm start` to run the application.

## Examples

There are many examples in this repository. We have broken these up into categories for you.
### Concepts & Fundamentals

In this section, these examples show you how to do things with Aurelia such as working with routing or localization. These demos help newcomers and experienced developers alike get familiar with Aurelia concepts and libraries through a hands-on approach.

**Simple Routing**

It doesn't get any simpler than this. A basic application showing you how to implement routing in your Aurelia 2 applications. No trickery or configuration, see how to create an application with hash-based routing.

[Source](examples/simple-routing) 
[Demo](https://simple-routing.vercel.app/)

**Advanced Routing**

Covers deeper parts of routing in Aurelia 2. This application showcases child routing, lifecycle hooks, how to hide routes behind authentication and more. This application is a good guide if you're wanting to learn routing concepts in Aurelia 2.

[Source](examples/advanced-routing) 
[Demo](https://advanced-routing.vercel.app/)

**Aurelia 2 State**

Covers working with the versatile and powerful Aurelia 2 state plugin for state management. Covers concepts such as binding to input values, working with collections, mutating state values and more. This is a copy of the todo application from below but made to use the Store plugin.

[Source](examples/aurelia2-state) 
[Demo](https://aurelia2-state.vercel.app/)

**Aurelia 2 State Persistence**

How to implement persistent state in the Aurelia State plugin. A copy of the previous Aurelia 2 State example, with persistence enabled out of the box. Make changes and refresh the page to see them persist.

[Source](examples/aurelia2-state-persistence) 
[Demo](https://aurelia2-state-persistence.vercel.app/)

### Integrations

**Aurelia 2 Tailwind**

An Aurelia 2 application that showcases how to use TailwindCSS with Aurelia 2. Integration is handled during the build step inside of the PostCSS Loader configuration inside `webpack.config.js` and main base Tailwind styles are inside of `src/my-app.css`

[Source](examples/aurelia2-tailwind) 
[Demo](https://aurelia2-tailwind.vercel.app/)

### Apps & Fun

**Aurelia 2 Todo**

A simplistic todo application showcasing some binding features.

[Source](examples/aurelia2-todo) 
[Demo](https://aurelia2-todo.vercel.app/)

**Crypto Price Tracker**

An application showcasing how to interact with a third-party API to display real-time cryptocurrency updates. A great introduction to Aurelia's reactive binding system as well as the use of Bootstrap alongside Shadow DOM styling for components.

[Source](examples/crypto-price-tracker) 
[Demo](https://aurelia2-crypto-tracker.vercel.app/)

**Widget Dashboard**

An application showing dynamic composition using `au-compose` as well as creating a modular UI with interactivity and working with API's.

[Source](examples/widget-dashboard) 
[Demo](https://widget-dashboard.vercel.app/)

**Metronome App**

A fun Aurelia 2 metronome application. Serves no purpose than to show you a real functioning application.

[Source](examples/metronome-app) 
[Demo](https://metronome-app.vercel.app/)

**QR Creator App**

A fun Aurelia 2 QR creator application. Enter a URL and get a QR code in return.

[Source](examples/qr-creator-app) 
[Demo](https://qr-creator-app.vercel.app/)