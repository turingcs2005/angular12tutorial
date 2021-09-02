import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGenderComponent } from './name-gender.component';

describe('NameGenderComponent', () => {
  let component: NameGenderComponent;
  let fixture: ComponentFixture<NameGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
