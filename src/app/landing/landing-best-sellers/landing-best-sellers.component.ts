import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-landing-best-sellers',
  templateUrl: './landing-best-sellers.component.html',
  styleUrls: ['./landing-best-sellers.component.scss']
})

export class LandingBestSellersComponent implements OnInit {

  public readonly bestSellerIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public productList: Product[] = [];
  public readonly limit = 5;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getBestSellers();
    setTimeout(() => console.log(this.productList), 5000);
  }

  private getBestSellers(){
    this.productService.getBestSellers(this.limit).subscribe((products) => {
      this.productList = products;
    })
  }

}
