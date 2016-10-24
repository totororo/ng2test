import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'base-app',
})

export class BaseComponent {
    langItem;
    constructor(public appService: AppService) {
        this.changeLang(this.appService.language);
    }

    public changeLang(lang: string) {
        this.appService.language = lang;
        this.appService.loadLang(lang).subscribe(result => {
            this.langItem = result;
        });
    }
}
