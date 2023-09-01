import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureAnalyticsComponent } from './expenditure-analytics.component';

describe('ExpenditureAnalyticsComponent', () => {
  let component: ExpenditureAnalyticsComponent;
  let fixture: ComponentFixture<ExpenditureAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenditureAnalyticsComponent]
    });
    fixture = TestBed.createComponent(ExpenditureAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
