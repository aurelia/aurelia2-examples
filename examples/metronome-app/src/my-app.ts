import { inject, IPlatform } from 'aurelia';
import { observable } from '@aurelia/runtime';

// @ts-expect-error Wav files don't get processed by the bundler
import click1 from './click1.wav';

// @ts-expect-error Wav files don't get processed by the bundler
import click2 from './click2.wav';

@inject(IPlatform)
export class MyApp {
  @observable() private bpm = 80;
  private playing = false;
  private count = 0;
  private beatsPerMeasure = 4;
  private timer;
    
  private click1 = new Audio(click1);
  private click2 = new Audio(click2);

  constructor(private platform: IPlatform) {

  }

  bpmChanged() {
    this.platform.queueMicrotask(() => {
      if (this.playing) {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.playClick(), (60 / this.bpm) * 1000);
  
        this.count = 0;
      }
    });
  }

  private startStop() {
    if (this.playing) {
      clearInterval(this.timer);

      this.playing = false;
    } else {
      this.timer = setInterval(() => this.playClick(), (60 / this.bpm) * 1000);
      this.count = 0;
      this.playing = true;

      this.playClick();
    }
  }

  private playClick() {
    if (this.count % this.beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    this.count = (this.count + 1) % this.beatsPerMeasure;
  }
}