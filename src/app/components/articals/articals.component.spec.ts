import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalsComponent } from './articals.component';

describe('ArticalsComponent', () => {
  let component: ArticalsComponent;
  let fixture: ComponentFixture<ArticalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticalsComponent]
    });
    fixture = TestBed.createComponent(ArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
