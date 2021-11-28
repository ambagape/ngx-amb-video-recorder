import { Injectable } from '@angular/core';


class NgxAmbVideoRecorderService implements INgxAmbVideoRecorderService {

  constructor() { }

  async startRecording(stream: MediaStream, durationInMS: number): Promise<Array<Blob>> {
    let recorder = new MediaRecorder(stream);
    let data = [];

    recorder.ondataavailable = event => data.push(event.data);
    recorder.start();

    let stopped = new Promise((resolve, reject) => {
      recorder.onstop = resolve;
      recorder.onerror = event => reject(event);
    });

    let recorded = this.wait(durationInMS).then(
      () => recorder.state == "recording" && recorder.stop()
    );

    await Promise.all([
      stopped,
      recorded
    ]);
    return data;
  }

  stopRecording(stream: MediaStream): void {
    stream.getTracks().forEach(track => track.stop());
  }

  getLastRecordedClip(): Promise<Blob> {
    throw new Error('Method not implemented.');
  }

  private wait(delayInMS: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, delayInMS));
  }

}


@Injectable({
  providedIn: 'root',
  useClass: NgxAmbVideoRecorderService
})
export abstract class INgxAmbVideoRecorderService {

  abstract startRecording(stream: MediaStream, durationInMS: number): Promise<Array<Blob>>;

  abstract stopRecording(stream: MediaStream): void;

  abstract getLastRecordedClip(): Promise<Blob>;

}


