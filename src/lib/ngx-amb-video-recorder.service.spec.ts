import { TestBed } from '@angular/core/testing';

import { NgxAmbVideoRecorderService } from './ngx-amb-video-recorder.service';

describe('NgxAmbVideoRecorderService', () => {
  let service: NgxAmbVideoRecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAmbVideoRecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
