import { IRouteableComponent, IRoute } from '@aurelia/router';
import { AuthHook } from '../auth-hook';

export class UserDashboard implements IRouteableComponent {
    // Include our auth lifecycle hook so we can prevent access to users who are not logged in
    static dependencies = [ AuthHook ];

    static routes: IRoute[] = [
        {
            path: ['', 'home'],
            component: () => import('./dashboard-pages/dashboard-home'),
            id: 'dashboard-home',
            title: 'Home'
        },
        {
            path: 'account',
            component: () => import('./dashboard-pages/account-area'),
            id: 'account-area',
            title: 'Account'
        }
    ];
}