import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad, Route
} from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders } from 'angularfire2';
import { AuthMethods } from 'angularfire2';
import { EmailPasswordCredentials } from 'angularfire2/auth';
import { FirebaseAuthState } from 'angularfire2';

import { AppService } from '../app.service';

@Injectable()
export class LoginService {
    authState: FirebaseAuthState;
    constructor(
        private angularFire: AngularFire,
        private appService: AppService,
        private router: Router) {
        this.angularFire.auth.subscribe(state => {
            this.authState = state;
        });
    }

    getAuthState(): FirebaseAuthState {
        return this.authState;
    }

    googleLogin() {
        return this.angularFire.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    }

    facebookLogin() {
        return this.angularFire.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    }

    twitterLogin() {
        return this.angularFire.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Popup
        });
    }

    githubLogin() {
        return this.angularFire.auth.login({
            provider: AuthProviders.Github,
            method: AuthMethods.Popup
        });
    }

    mailLogin(user, password) {
        return this.angularFire.auth.login({
            email: user,
            password: password,
        }, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            });
    }

    anonymousLogin() {
        return this.angularFire.auth.login({
            provider: AuthProviders.Anonymous,
            method: AuthMethods.Anonymous,
        });
    }

    logout() {
        this.angularFire.auth.logout();
    }

    registerUser(userId, password) {
        let ep = { "email": userId, "password": password } as EmailPasswordCredentials;
        return this.angularFire.auth.createUser(ep);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.appService.user) {
            return true;
        }
        this.appService.redirectURL = url;
        this.router.navigate(['login']);
        return false;
    }

    customeTokenLogin(token) {
        return this.angularFire.auth.login(token, {
            provider: AuthProviders.Custom,
            method: AuthMethods.CustomToken
        })

    }
}


