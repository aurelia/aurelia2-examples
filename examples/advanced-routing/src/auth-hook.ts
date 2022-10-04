import { IAuthService } from './services/auth-service';

import { ILifecycleHooks, lifecycleHooks } from "aurelia";

@lifecycleHooks()
export class AuthHook implements ILifecycleHooks {

    constructor(@IAuthService readonly auth: IAuthService) { }

    canLoad() {
        if ( !this.auth.isLoggedIn ) {
            return 'access-denied';
        }

        return true;
    }

}