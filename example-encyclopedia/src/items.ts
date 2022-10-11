export const AppItems = [
    {
        name: 'Simple Routing',
        description: `It doesn't get any simpler than this. A basic application showing you how to implement routing in your Aurelia 2 applications. No trickery or configuration, see how to create an application with hash-based routing.`,
        source: 'simple-routing',
        demo: 'https://simple-routing.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['router', 'plugins']
    },
    {
        name: 'Advanced Routing',
        description: `Covers deeper parts of routing in Aurelia 2. This application showcases child routing, lifecycle hooks, how to hide routes behind authentication and more. This application is a good guide if you're wanting to learn routing concepts in Aurelia 2.`,
        source: 'advanced-routing',
        demo: 'https://advanced-routing.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['router', 'auth', 'lifecycle-hooks', 'plugins']
    },
    {
        name: 'State',
        description: `Covers working with the versatile and powerful Aurelia 2 State plugin for state management. Covers concepts such as binding to input values, working with collections, mutating state values and more. This is a copy of the todo application from below but made to use the Store plugin.`,
        source: 'aurelia2-state',
        demo: 'https://aurelia2-state.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['state', 'plugins']
    },
    {
        name: 'State Persistence',
        description: `How to implement persistent state in the Aurelia State plugin. A copy of the previous Aurelia 2 State example, with persistence, enabled out of the box. Make changes and refresh the page to see them persist.`,
        source: 'aurelia2-state-persistence',
        demo: 'https://aurelia2-state-persistence.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['state', 'plugins']
    },
    {
        name: 'Localization',
        description: `An Aurelia application using the i18n package to implement localization functionality. In this application, you'll learn how to implement a language switcher to switch between locales as well as display locale values in your application.`,
        source: 'aurelia2-localization',
        demo: 'https://aurelia2-localization.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['localization', 'plugins']
    },
    {
        name: 'Validation',
        description: `An Aurelia application utilizing the Aurelia validation package. This application guides you through simple validation, child component inheritance validation, custom rules, displaying errors and other core validation concepts.`,
        source: 'aurelia2-validation',
        demo: 'https://aurelia2-validation.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['validation', 'plugins']
    },
    {
        name: 'Lambda Expressions',
        description: `An Aurelia 2 application that shows how to leverage lambda expressions in your Aurelia applications. Discover ways to simplify use cases where you might think to use a value converter and other handy scenarios.`,
        source: 'aurelia2-lambda-expressions',
        demo: 'https://aurelia2-lambda-expressions.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['templating']
    },
    {
        name: 'Working with @watch',
        description: `An Aurelia application that shows how you can leverage the powerful @watch decorator to observe values, as well as expressions inside of your applications and react to them.`,
        source: 'using-watch',
        demo: 'https://using-watch.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['templating', 'watch']
    },
    {
        name: 'Working with Shadow DOM',
        description: `In this example application, you'll learn how to work with Shadow DOM for encapsulating styles in your Aurelia applications. Shadow DOM is a native standards-based way to keep styles self-contained.`,
        source: 'aurelia2-shadow-dom',
        demo: 'https://aurelia2-shadow-dom.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['templating', 'shadowdom', 'styling']
    },
    {
        name: 'Custom Attribute Parsers',
        description: `In this example application, you will learn an advanced concept. The ability to configure Aurelia's templating syntax to support syntax of other frameworks like Vue or Angular.`,
        source: 'aurelia2-attribute-patterns',
        demo: 'https://aurelia2-attribute-patterns.vercel.app/',
        category: 'concepts-fundamentals',
        tags: ['templating', 'low-level', 'advanced']
    },
    {
        name: 'Working with Web Animations API',
        description: `An Aurelia 2 application that shows how you can leverage the standards-based Web Animations API to add animations to your Aurelia applications without any additional dependencies.`,
        source: 'animation-native',
        demo: 'https://animation-native.vercel.app/',
        category: 'integrations',
        tags: ['animation', 'native-api', 'advanced']
    },
    {
        name: 'Integration with Emotion JS (CSS-in-JS)',
        description: `An Aurelia 2 application showcasing how you can integrate CSS-in-JS solution Emotion to write CSS using Javascript in your Aurelia applications.`,
        source: 'aurelia2-emotion',
        demo: 'https://aurelia2-emotion.vercel.app/',
        category: 'integrations',
        tags: ['css-in-js', 'tooling', 'third-party', 'css']
    },
    {
        name: 'Integration with TailwindCSS',
        description: `An Aurelia 2 application that showcases how to use TailwindCSS with Aurelia 2.`,
        source: 'aurelia2-tailwind',
        demo: 'https://aurelia2-tailwind.vercel.app/',
        category: 'integrations',
        tags: ['tailwind', 'tooling', 'third-party', 'css']
    },
    {
        name: 'Todo Application',
        description: `A simplistic and nicely styled todo application showcasing some Aurelia binding features.`,
        source: 'aurelia2-todo',
        demo: 'https://aurelia2-todo.vercel.app/',
        category: 'fun',
        tags: ['app', 'todo', 'example']
    },
    {
        name: 'Crypto Price Tracker Application',
        description: `An application showcasing how to interact with a third-party API to display real-time cryptocurrency updates.`,
        source: 'crypto-price-tracker',
        demo: 'https://crypto-price-tracker.vercel.app/',
        category: 'fun',
        tags: ['app', 'crypto', 'apis', 'example']
    },
    {
        name: 'Widget Dashboard Application',
        description: `An application showing dynamic composition using 'au-compose' as well as creating a modular UI with interactivity and working with API's.`,
        source: 'widget-dashboard',
        demo: 'https://widget-dashboard.vercel.app/',
        category: 'fun',
        tags: ['app', 'dynamic-composition', 'apis', 'example']
    },
    {
        name: 'Metronome Application',
        description: `A fun Aurelia 2 metronome application. A simple slider determines the BPM of the metronome. We bind to the input and then use native Audio API's to play two different sounds based on the NPM interval calculated from the slider value.`,
        source: 'metronome-app',
        demo: 'https://metronome-app.vercel.app/',
        category: 'fun',
        tags: ['app', 'audio', 'example']
    },
    {
        name: 'QR Creator App',
        description: `A fun Aurelia 2 QR creator application. Enter a URL and get a QR code in return. In this example, you will learn how to bind to a text input, how to use a third-party NPM package and bind an encoded image string to the 'src' of an image.`,
        source: 'qr-creator-app',
        demo: 'https://qr-creator-app.vercel.app/',
        category: 'fun',
        tags: ['app', 'image', 'example']
    },
];

export const AppItemCategories = [
    {
        name: 'Concepts & Fundamentals',
        slug: 'concepts-fundamentals',
        description: `In this section, these examples show you how to do things with Aurelia such as working with routing or localization. These demos help newcomers and experienced developers alike get familiar with Aurelia concepts and libraries through a hands-on approach.`
    },
    {
        name: 'Integrations',
        slug: 'integrations',
        description: `Integrations are third-party libraries and packages like Tailwind and CSS-in-JS solutions, native API's like the Web Animations API.`
    },
    {
        name: 'Fun',
        slug: 'fun',
        description: `These applications are intended to show you how easy and fun it is to build small feature-based applications, while at the same time teaching you new things about Aurelia 2.`
    },
];