import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { BaseComponent } from '../base-component';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { User } from '../object/user.object';
import { AppService } from '../app.service';


const MAIL = 1;
const TWITTER = 2;
const FACEBOOK = 3;
const GOOGLE = 4;
const GITHUB = 5;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {

    titleMessage = undefined;
    userId = undefined;
    //displayName = undefined;
    //photoURL = undefined;

    email = "demo@demo.com";
    password = "demodemo";
    error = undefined;
    isRegister = false;
    userProfileSubscribe = null;
    routeDataSubscribe = null;
    // test
    userItems: Array<User>;

    public disabled: boolean = false;
    public status: { isopen: boolean } = { isopen: false };

    constructor(private loginService: LoginService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        public appService: AppService, ) {
        super(appService);
    }

    ngOnInit() {

        this.userProfileSubscribe = this.userService.getUserProfiles().subscribe(obj => {
            this.userItems = obj;
        });

        // logout
        this.routeDataSubscribe = this.route.data.subscribe(value => {
            let d = JSON.parse(JSON.stringify(value));
            // logout
            if (d.login == false) {
                this.logout();
                this.appService.user = null;
                this.router.navigate(['/']);
                return;
            }
            if (d.register == true) {
                this.register();
            }
        });

        if (this.appService.user) {
            this.router.navigate(['admin']);
        }
    }

    login(index: number) {
        this.error = undefined;
        switch (index) {
            case MAIL:
                this.loginService.mailLogin(this.email, this.password).then((user) => {
                    this.setData(user);
                }).catch((error) => {
                    this.errorHandler(error);
                });
                break;
            case TWITTER:
                this.loginService.twitterLogin().then((user) => {
                    this.setData(user);
                }).catch((error) => {
                    this.errorHandler(error);
                });
                break;
            case FACEBOOK:
                this.loginService.facebookLogin().then((user) => {
                    this.setData(user);
                }).catch((error) => {
                    this.errorHandler(error);
                });
                break;
            case GOOGLE:
                this.loginService.googleLogin().then((user) => {
                    this.setData(user);
                }).catch((error) => {
                    this.errorHandler(error);
                });
                break;
            case GITHUB:
                this.loginService.githubLogin().then((user) => {
                    this.setData(user);
                }).catch((error) => {
                    this.errorHandler(error);
                });
                break;
            default:
                break;
        }
    }

    setData(user) {
        this.titleMessage = "Login Success.";
        this.userId = user.uid;
        this.appService.user = user;
        this.router.navigate(['admin']);
    }

    logout() {
        this.userId = undefined;
        this.loginService.logout();
    }

    errorHandler(error) {
        this.error = error;
        console.log(error);
        this.titleMessage = "ERROR";
    }

    register() {
        this.isRegister = true;
        this.titleMessage = "Register Form";
    }

    cancel() {
        this.isRegister = false;
        this.titleMessage = "Please Sign In";
    }

    registerUser() {
        this.loginService.registerUser(this.email, this.password).then(result => {
            this.isRegister = false;
            this.titleMessage = "Register Success.";
        }).catch(error => {
            this.errorHandler(error);
        });
    }

    ngOnDestroy() {
        if (this.userProfileSubscribe) {
            this.userProfileSubscribe.unsubscribe();
        }
        if (this.routeDataSubscribe) {
            this.routeDataSubscribe.unsubscribe();
        }
    }


    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}