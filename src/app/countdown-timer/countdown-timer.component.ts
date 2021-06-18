import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() timer: any = {};
  @Input() pause: any;
  @Input() start: any;
  interval: number;
  previousValue: any;
  countdown: any;
  newTimer: any;

  constructor() {}

  ngOnInit() {
    this.timer = { time: 1000, isStart: 'false', isPaused: 'false' };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.timer.isStart == 'true' && this.timer.isPaused == 'false') {
      this.startTimer();
    } else if (this.timer.isPaused == 'true' && this.timer.isStart == 'false') {
      this.pauseTimer();
    } else if (
      this.timer.isPaused == 'false' &&
      this.timer.isStart == 'false'
    ) {
      this.resetTimer();
    }
  }

  resetTimer() {}

  pauseTimer() {
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer.time > 0) {
        this.timer.time--;
      }
    }, 1000);
  }
}
