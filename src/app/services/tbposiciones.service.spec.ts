import { TestBed } from '@angular/core/testing';

import { TbposicionesService } from './tbposiciones.service';

describe('TbposicionesService', () => {
  let service: TbposicionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TbposicionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
