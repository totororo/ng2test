import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Browser } from './tables.object';

const API_TABLES_URL = "./assets/dummy/tables.json";
@Injectable()
export class TablesService {
    constructor(private http: Http) {

    }

    getData() {
        return this.http.get(API_TABLES_URL).map(response => {
            let objs = response.json();
            return objs as Browser[];
        }).catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Tables Service error');
    }

}