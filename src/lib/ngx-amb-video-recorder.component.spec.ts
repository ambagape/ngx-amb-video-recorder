import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAmbVideoRecorderComponent } from './ngx-amb-video-recorder.component';

describe('NgxAmbVideoRecorderComponent', () => {
  let component: NgxAmbVideoRecorderComponent;
  let fixture: ComponentFixture<NgxAmbVideoRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAmbVideoRecorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAmbVideoRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
