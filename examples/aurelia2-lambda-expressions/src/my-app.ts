export class MyApp {
    static routes = [

        {
            path: [''],
            redirectTo: 'home',
        },
        {
            path: 'home',
            component: () => import('./components/home-page'),
            title: 'Home',
            id: 'home'
        },

    ];
}
