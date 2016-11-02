import { ComponentRef } from '@angular/core';

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
                return body || {};
            })
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Lang Service error');
    }

    public static randomToken(length: number): string {
        let stringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?'];
        let randomString = "";
        for (let i = 1; i < length; i++) {
            let randNum = Math.ceil(Math.random() * stringArray.length);
            randomString += stringArray[randNum];
        }
        return randomString;
    }

}
