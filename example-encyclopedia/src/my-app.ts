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

    private menuItems = [
        {
            heading: 'Concepts & Fundamentals',
            id: 'conceptsFundamentals',
            items: [
                {
                    item: 'Simple Routing',
                    source: 'simple-routing',
                    demo: 'https://simple-routing.vercel.app/'
                },
                {
                    item: 'Advanced Routing',
                    source: 'advanced-routing',
                    demo: 'https://advanced-routing.vercel.app/'
                },
                {
                    item: 'Aurelia 2 State',
                    source: 'aurelia2-state',
                    demo: 'https://aurelia2-state.vercel.app/'
                },
                {
                    item: 'Aurelia 2 State Persistence',
                    source: 'aurelia2-state-persistence',
                    demo: 'https://aurelia2-state-persistence.vercel.app/'
                },

            ]
        }
    ];
}
