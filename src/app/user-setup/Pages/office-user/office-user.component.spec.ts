import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeUserComponent } from './office-user.component';

describe('OfficeUserComponent', () => {
  let component: OfficeUserComponent;
  let fixture: ComponentFixture<OfficeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficeUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
