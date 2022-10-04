export default {
    verbose: false,
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
    testEnvironment: "jsdom",
    transform: {
        "\\.(css|less|sass|scss|styl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
        "\\.(ts|js|html)$": ["@aurelia/ts-jest", { "defaultShadowOptions": { "mode": "open" } }]
    },
    setupFiles: [
        "./test/jest.setup.ts"
    ],
};