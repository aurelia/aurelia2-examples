export class MyApp {
    static routes = [

        {
            path: ['', 'home'],
            redirectTo: 'basic',
        },
        {
            path: 'basic',
            component: () => import('./components/basic-styles'),
            title: 'Basic Styles',
            id: 'basic'
        },
        {
            path: 'access-shadow-dom',
            component: () => import('./components/access-shadow-dom'),
            title: 'Access Shadow DOM',
            id: 'access-shadow-dom'
        },
        {
            path: 'global',
            component: () => import('./components/global-styles'),
            title: 'Global Styles',
            id: 'global'
        },

    ];
}
