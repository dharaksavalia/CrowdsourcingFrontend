import { TestBed, inject } from '@angular/core/testing';

import { CattegoriesService } from './cattegories.service';

describe('CattegoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CattegoriesService]
    });
  });

  it('should be created', inject([CattegoriesService], (service: CattegoriesService) => {
    expect(service).toBeTruthy();
  }));
});
