import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBestSellersComponent } from './landing-best-sellers.component';

describe('LandingBestSellersComponent', () => {
  let component: LandingBestSellersComponent;
  let fixture: ComponentFixture<LandingBestSellersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingBestSellersComponent]
    });
    fixture = TestBed.createComponent(LandingBestSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
