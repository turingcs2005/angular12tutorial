import { TestBed } from '@angular/core/testing';

import { FormToolsService } from './form-tools.service';

describe('FormToolsService', () => {
  let service: FormToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
