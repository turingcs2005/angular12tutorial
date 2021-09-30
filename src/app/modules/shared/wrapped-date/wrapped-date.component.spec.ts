import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrappedDateComponent } from './wrapped-date.component';

describe('WrappedDateComponent', () => {
  let component: WrappedDateComponent;
  let fixture: ComponentFixture<WrappedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrappedDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrappedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
