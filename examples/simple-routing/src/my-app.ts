import { IRouteableComponent, IRoute } from '@aurelia/router';

export class MyApp implements IRouteableComponent {

    static routes: IRoute[] = [
        {
            path: '',
            component: () => import('./components/home-page'),
            id: 'Home',
            title: 'Home'
        },
        {
            path: 'about',
            component: () => import('./components/about-page'),
            id: 'About',
            title: 'About'
        },
        {
            path: 'contact',
            component: () => import('./components/contact-page'),
            id: 'Contact',
            title: 'Contact'
        },
    ];

}
