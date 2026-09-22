import { TestBed } from '@angular/core/testing';

import { SystemMetrics } from './system-metrics';

describe('SystemMetrics', () => {
  let service: SystemMetrics;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemMetrics);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
