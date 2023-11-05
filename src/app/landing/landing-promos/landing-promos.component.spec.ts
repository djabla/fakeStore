import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPromosComponent } from './landing-promos.component';

describe('LandingPromosComponent', () => {
  let component: LandingPromosComponent;
  let fixture: ComponentFixture<LandingPromosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPromosComponent]
    });
    fixture = TestBed.createComponent(LandingPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
