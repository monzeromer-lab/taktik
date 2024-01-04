import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBtnComponent } from './service-btn.component';

describe('ServiceBtnComponent', () => {
  let component: ServiceBtnComponent;
  let fixture: ComponentFixture<ServiceBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBtnComponent]
    });
    fixture = TestBed.createComponent(ServiceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
