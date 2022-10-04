import { DI } from 'aurelia';

export const IAuthService = DI.createInterface<IAuthService>('IAuthService', x => x.singleton(AuthService));
export type IAuthService = AuthService;

export class AuthService {
    private loggedIn = false;

    constructor() {
        this.loggedIn = !!sessionStorage.getItem('authenticated') ?? false;
    }

    async login(username: string, password: string) {
        if (username === 'user' && password === 'password') {
            sessionStorage.setItem('authenticated', 'true');

            this.loggedIn = true;

            return true;
        }

        this.loggedIn = false;

        return false;
    }

    logout() {
        sessionStorage.removeItem('authenticated');
        this.loggedIn = false;
    }

    get isLoggedIn() {
        return this.loggedIn;
    }
}