import { TestBed } from '@angular/core/testing';

import { FocusFlowService } from './focus-flow.service';

describe('FocusFlowService', () => {
  let service: FocusFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocusFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
