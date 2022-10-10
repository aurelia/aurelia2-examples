export class MyApp {
    static routes = [
        {
            path: '',
            component: () => import('./components/home'),
            title: 'Home'
        },
        {
            path: 'about',
            component: () => import('./components/about'),
            title: 'About'
        },
    ];
}
