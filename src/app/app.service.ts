import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const LANG_URL = "./assets/lang/";

import { User } from './object/user.object';

@Injectable()

export class AppService {
    version: number = 0.1;
    user: User;
    token: string;
    redirectURL;
    language: string = 'ja';

    constructor(private http: Http) {
        console.log(" === APP SERVICE === Version:" + this.version);
    }
    /**
     *  Load Language 
     *  @param language (en,cn,ja,kr)
     */
    loadLang(lang: string) {
        return this.http.get(LANG_URL + lang + ".json")
            .map(response => {
                let body = response.json();
                console.log(body);
                return body || {};
            }) // {result:OK | NG}
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Lang Service error');
    }
}
