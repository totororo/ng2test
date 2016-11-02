import { Component, OnInit, OnDestroy, Input, ViewChild, OnChanges, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { MapsAPILoader } from 'angular2-google-maps/core';
// npm install lodash --save
// npm install @types/lodash --save
import * as _ from 'lodash';

// locale



import { ButtonsComponent } from '../bcomponent/buttons/buttons.component';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles:
  [".sebm-google-map-container {height: 300px;}"],

})
export class DashboardComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('comb') comb;
  @ViewChild('myCanvas') myCanvas;
  @ViewChild('googleChat') googleChat;

  title: string = 'My project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  context: CanvasRenderingContext2D;
  rectW: number = 100;
  rectH: number = 100;
  rectColor: string = "#FF0000";

  newComment = 10;
  newTask = 30;
  newOrder = 100;
  newTicket = 121;
  subscription: any;
  buttons: Array<any> = [];
  myDate: number;

  public gauge_ChartData = [
    ['Label', 'Value'],
    ['メモリ', 120],
    ['CPU', 80]];

  constructor(private appService: AppService, private router: Router) {
    if (!appService.user) {
      this.router.navigate(["/"]);
    }
    let button1 = new ButtonsComponent();
    let button2 = new ButtonsComponent();

    this.buttons.push(button1);
    this.buttons.push(button2);
    this.myDate = Date.now();

    //moment.locale('ja');
    console.log(this.googleChat);
  }

  ngOnInit() {
    let timer = TimerObservable.create(1000, 500);
    this.subscription = timer.subscribe(t => {
      //console.log(t);
      this.gauge_ChartData = [['Label', 'Value'], ['メモリ', t], ['CPU', t]];
    });
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    console.log(_.drop([1, 2, 3], 2));

  }

  @ViewChild('layout') canvasRef;
  image = '/assets/img/raspberry/raspberry-pi-logo.png';

  ngAfterViewInit() {
    let canvas = this.canvasRef.nativeElement;
    let context = canvas.getContext('2d');

    let source = new Image();
    source.crossOrigin = 'Anonymous';
    source.onload = () => {
      canvas.height = source.height;
      canvas.width = source.width;
      context.drawImage(source, 0, 0);

      context.font = "100px impact";
      context.textAlign = 'center';
      context.fillStyle = 'black';
      context.fillText('HELLO WORLD', canvas.width / 2, canvas.height * 0.8);

      this.image = canvas.toDataURL();
    };
    source.src = this.image;
  }

  tick() {
    // 本当はデータ変更時のみ呼び出したい
    requestAnimationFrame(() => {
      this.tick()
    });

    var ctx = this.context;
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = this.rectColor;
    ctx.fillRect(0, 0, this.rectW, this.rectH);


  }
  ngOnChanges() {
    console.log(this.comb.singleModel);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  public gauge_ChartOptions = {
    width: 400, height: 120,
    redFrom: 90, redTo: 100,
    yellowFrom: 75, yellowTo: 90,
    minorTicks: 5
  };
}
