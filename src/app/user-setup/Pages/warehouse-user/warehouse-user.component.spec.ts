import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseUserComponent } from './warehouse-user.component';

describe('WarehouseUserComponent', () => {
  let component: WarehouseUserComponent;
  let fixture: ComponentFixture<WarehouseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehouseUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarehouseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
