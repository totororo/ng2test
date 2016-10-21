import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  newComment = 10;
  newTask = 30;
  newOrder = 100;
  newTicket = 121;
  subscription: any;

  constructor(private appService: AppService, private router: Router) {
    if (!appService.user) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    let timer = TimerObservable.create(1000, 1000);
    this.subscription = timer.subscribe(t => {
      this.newComment += t;
      this.newTask += t;
      this.newOrder += t;
      this.newTicket += t;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
