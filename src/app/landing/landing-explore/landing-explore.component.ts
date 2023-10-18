import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-explore',
  templateUrl: './landing-explore.component.html',
  styleUrls: ['./landing-explore.component.scss']
})
export class LandingExploreComponent {
  categories = [
    {
      name: 'Electronics',
      image: 'assets/categories/electronics.jpg'
    },
    {
      name: 'Jewelry',
      image: 'assets/categories/jewelry.jpg'
    },
    {
      name: "Men's Clothing",
      image: 'assets/categories/mens.webp'
    },
    {
      name: "Women's Clothing",
      image: 'assets/categories/womens.webp'
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    }
  ];
}
