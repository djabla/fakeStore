import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-landing-new-arrivals',
  templateUrl: './landing-new-arrivals.component.html',
  styleUrls: ['./landing-new-arrivals.component.scss']
})
export class LandingNewArrivalsComponent implements OnInit{

  public productList: Product[] = [];
  public readonly limit = 5;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getNewArrivals();
    setTimeout(() => console.log(this.productList), 5000);
  }

  private getNewArrivals(){
    this.productService.getNewArrivals(this.limit).subscribe((products) => {
      this.productList = products;
    })
  }

}
