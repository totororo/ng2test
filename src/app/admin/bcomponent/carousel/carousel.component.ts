import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  public myInterval: number = 5000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 1);
  }

  ngOnInit() {
  }

}

// Source
// http://valor-software.com/ng2-bootstrap/#/carousel