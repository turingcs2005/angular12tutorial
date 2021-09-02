import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicsComponent } from './form-basics.component';

describe('FormBasicsComponent', () => {
  let component: FormBasicsComponent;
  let fixture: ComponentFixture<FormBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
