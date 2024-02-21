import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingUserComponent } from './accounting-user.component';

describe('AccountingUserComponent', () => {
  let component: AccountingUserComponent;
  let fixture: ComponentFixture<AccountingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountingUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
