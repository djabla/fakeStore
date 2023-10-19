import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAccordionComponent } from './landing-accordion.component';

describe('LandingAccordionComponent', () => {
  let component: LandingAccordionComponent;
  let fixture: ComponentFixture<LandingAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingAccordionComponent]
    });
    fixture = TestBed.createComponent(LandingAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
