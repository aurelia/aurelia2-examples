export class MyApp {
    static routes = [
        {
            path: '',
            component: () => import('./components/home'),
            title: 'Home'
        },
    ];
}
