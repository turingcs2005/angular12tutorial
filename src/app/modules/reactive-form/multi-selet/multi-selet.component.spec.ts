import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeletComponent } from './multi-selet.component';

describe('MultiSeletComponent', () => {
  let component: MultiSeletComponent;
  let fixture: ComponentFixture<MultiSeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
