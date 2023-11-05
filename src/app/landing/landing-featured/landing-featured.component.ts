import { Component, Input, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-landing-featured',
  templateUrl: './landing-featured.component.html',
  styleUrls: ['./landing-featured.component.scss']
})
export class LandingFeaturedComponent implements OnInit {

  @Input() featuredCategory = 'electronics';
  @Input() featuredTitle = 'Our prized collection: ';
  @Input() featuredDesc = 'Italic was born to challenge the conventional notion of luxury. We believe luxury should be defined by the quality of a product, not by a price tag or logo.';

  public productList: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getBestSellers(5, this.featuredCategory).subscribe((products) => {
      this.productList = products;
    })
  }

}
