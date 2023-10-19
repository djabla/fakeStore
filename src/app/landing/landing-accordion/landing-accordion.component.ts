import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-accordion',
  templateUrl: './landing-accordion.component.html',
  styleUrls: ['./landing-accordion.component.scss']
})
export class LandingAccordionComponent implements OnInit {

  activeIndex: any = 0;
  images: any[] | undefined = [
    '../../../assets/categories/electronics.jpg',
    '../../../assets/categories/jewelry.jpg',
    '../../../assets/categories/mens.webp',
  ]

  public constructor() { }

  ngOnInit() {
    
  }

  isAccordionTabDisabled(index: number): boolean {
    return index === this.activeIndex;
  }
}
