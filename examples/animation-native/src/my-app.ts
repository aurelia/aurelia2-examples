export class MyApp {
    static routes = [

        {
            path: ['', 'home'],
            redirectTo: 'basic',
        },
        {
            path: 'basic',
            component: () => import('./components/basic-animation'),
            title: 'Basic Animation',
            id: 'basic'
        },
        {
            path: 'native-lib',
            component: () => import('./components/native-lib-animation'),
            title: 'Native Lib Animation',
            id: 'native'
        },

    ];
}
