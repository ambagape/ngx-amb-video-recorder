import { TestBed } from '@angular/core/testing';
import { INgxAmbVideoRecorderService } from './ngx-amb-video-recorder.service';

describe('NgxAmbVideoRecorderService', () => {
  let service: INgxAmbVideoRecorderService;
  let mediaStreamMock: jasmine.SpyObj<MediaStream>;

  beforeEach(() => {
    mediaStreamMock = jasmine.createSpyObj('MediaStream',['ondataavailable','getTracks','start','onstop','onerror','state','stop']);
    TestBed.configureTestingModule({});
    service = TestBed.inject(INgxAmbVideoRecorderService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start recording', async () => {
    const recorder = await service.startRecording(mediaStreamMock,5000);
    expect(recorder).toBeTruthy();
  });

  it('should stop recording and get last recorded video-url', async () => {
    await service.startRecording(mediaStreamMock,5000);
    const tracks: Array<jasmine.SpyObj<MediaStreamTrack>> = [];
    for(let i = 0; i < 1; i++){
      const track: jasmine.SpyObj<MediaStreamTrack> = jasmine.createSpyObj('MediaStreamTrack',['stop']);
      tracks.push(track);
    }
    mediaStreamMock.getTracks.and.returnValues(tracks);
    await service.stopRecording(mediaStreamMock);
    expect(tracks[0].stop).toHaveBeenCalled();
    const blob = await service.getLastRecordedClip();
    expect(blob).toBeTruthy();
  });

});
