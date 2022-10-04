import { IRouteableComponent, IRouter } from '@aurelia/router';
import { IAuthService } from '../services/auth-service';

export class LoginPage implements IRouteableComponent {
    private username = '';
    private password = '';

    constructor(@IRouter readonly router: IRouter, @IAuthService readonly auth: IAuthService) {

    }

    async login() {
        const result = await this.auth.login(this.username, this.password);
        
        if (result) {
            this.router.load('/dashboard');
        }
    }
}