/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceDataService } from './service-data.service';

describe('ServiceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDataService]
    });
  });

  it('should ...', inject([ServiceDataService], (service: ServiceDataService) => {
    expect(service).toBeTruthy();
  }));
});
