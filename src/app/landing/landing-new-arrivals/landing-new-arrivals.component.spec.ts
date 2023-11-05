import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNewArrivalsComponent } from './landing-new-arrivals.component';

describe('LandingNewArrivalsComponent', () => {
  let component: LandingNewArrivalsComponent;
  let fixture: ComponentFixture<LandingNewArrivalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingNewArrivalsComponent]
    });
    fixture = TestBed.createComponent(LandingNewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
