export class MyApp {
    static routes = [

        {
            path: ['', 'home'],
            redirectTo: 'vue',
        },
        {
            path: 'vue',
            component: () => import('./components/vue-syntax'),
            title: 'Vue Syntax',
            id: 'vue'
        },
        {
            path: 'angular',
            component: () => import('./components/angular-syntax'),
            title: 'Angular Syntax',
            id: 'angular'
        },

    ];
}
