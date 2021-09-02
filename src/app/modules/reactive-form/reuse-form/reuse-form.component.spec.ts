import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseFormComponent } from './reuse-form.component';

describe('ReuseFormComponent', () => {
  let component: ReuseFormComponent;
  let fixture: ComponentFixture<ReuseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
