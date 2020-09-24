import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanByIdComponent } from './view-loan-by-id.component';

describe('ViewLoanByIdComponent', () => {
  let component: ViewLoanByIdComponent;
  let fixture: ComponentFixture<ViewLoanByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoanByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
