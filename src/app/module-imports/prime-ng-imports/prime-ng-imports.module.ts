import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CarouselModule,
    AccordionModule,
    GalleriaModule,
  ]
})
export class PrimeNGImportsModule { }
