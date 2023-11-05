import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeaturedComponent } from './landing-featured.component';

describe('LandingFeaturedComponent', () => {
  let component: LandingFeaturedComponent;
  let fixture: ComponentFixture<LandingFeaturedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFeaturedComponent]
    });
    fixture = TestBed.createComponent(LandingFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
