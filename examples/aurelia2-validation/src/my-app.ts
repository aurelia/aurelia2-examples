export class MyApp {
    static routes = [

        {
            path: ['', 'home'],
            component: () => import('./components/home-page'),
            title: 'Home',
            id: 'home'
        },
        {
            path: 'basic',
            component: () => import('./components/basic-example'),
            title: 'Basic',
            id: 'basic'
        },
        {
            path: 'advanced',
            component: () => import('./components/advanced-example'),
            title: 'Advanced',
            id: 'advanced'
        },
        {
            path: 'displaying-errors',
            component: () => import('./components/displaying-errors'),
            title: 'Displaying Errors',
            id: 'displaying-errors'
        },
        {
            path: 'custom-rules',
            component: () => import('./components/custom-rules'),
            title: 'Custom Rules',
            id: 'custom-rules'
        },

    ];
}
