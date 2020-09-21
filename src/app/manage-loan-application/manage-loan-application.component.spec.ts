import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoanApplicationComponent } from './manage-loan-application.component';

describe('ManageLoanApplicationComponent', () => {
  let component: ManageLoanApplicationComponent;
  let fixture: ComponentFixture<ManageLoanApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLoanApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
