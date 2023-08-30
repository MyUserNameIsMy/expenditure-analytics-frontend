import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureSubmitComponent } from './expenditure-submit.component';

describe('ExpenditureSubmitComponent', () => {
  let component: ExpenditureSubmitComponent;
  let fixture: ComponentFixture<ExpenditureSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenditureSubmitComponent]
    });
    fixture = TestBed.createComponent(ExpenditureSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
