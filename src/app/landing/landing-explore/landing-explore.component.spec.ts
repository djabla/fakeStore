import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingExploreComponent } from './landing-explore.component';

describe('LandingExploreComponent', () => {
  let component: LandingExploreComponent;
  let fixture: ComponentFixture<LandingExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingExploreComponent]
    });
    fixture = TestBed.createComponent(LandingExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
