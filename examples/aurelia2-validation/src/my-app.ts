export class MyApp {
    static routes = [

        {
            path: '',
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

    ];
}
