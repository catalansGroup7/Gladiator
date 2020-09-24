import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLoanDetailsComponent } from './view-all-loan-details.component';

describe('ViewAllLoanDetailsComponent', () => {
  let component: ViewAllLoanDetailsComponent;
  let fixture: ComponentFixture<ViewAllLoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllLoanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
