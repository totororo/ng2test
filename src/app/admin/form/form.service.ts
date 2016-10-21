import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Browser } from '../tables/tables.object';

const API_FORMS_URL = "./assets/dummy/formdata.json";
@Injectable()
export class SampleFormService {
    constructor(private http: Http) {
        console.log("#form service#");
    }

    saveData(body) {
        console.log("POST: " + body);
        return this.http.get(API_FORMS_URL).map(response => { // TODO: change post
            return response.json();
        }).catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Forms Service error');
    }

}