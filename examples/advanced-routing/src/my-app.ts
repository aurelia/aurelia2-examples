import { IRouteableComponent, IRoute, IRouter } from '@aurelia/router';
import { IAuthService } from './services/auth-service';

export class MyApp implements IRouteableComponent {

    constructor(@IAuthService readonly auth: IAuthService, @IRouter readonly router: IRouter) {
    }

    static routes: IRoute[] = [
        {
            path: '',
            component: () => import('./components/home-page'),
            id: 'home',
            title: 'Home'
        },
        {
            path: 'login',
            component: () => import('./components/login-page'),
            id: 'login',
            title: 'Login'
        },
        {
            path: 'dashboard',
            component: () => import('./components/user-dashboard'),
            id: 'dashboard',
            title: 'Dashboard'
        },
        {
            path: 'about',
            component: () => import('./components/about-page'),
            id: 'about',
            title: 'About'
        },
        {
            path: 'contact',
            component: () => import('./components/contact-page'),
            id: 'contact',
            title: 'Contact'
        },
        {
            path: 'access-denied',
            component: () => import('./components/access-denied'),
            id: 'access-denied',
            title: 'Access Denied'
        },
        {
            path: '*',
            component: () => import('./components/not-found'),
            id: 'not-found',
            title: 'Not Found'
        }
    ];

    logout() {
        this.auth.logout();

        this.router.load('/');
    }

}
