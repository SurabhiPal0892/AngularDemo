import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() timer: any;
  @Input() pause: any;
  @Input() start: any;
  interval: number;
  previousValue: any;
  countdown: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.start == 'true' && this.pause == 'false') {
      this.startTimer();
    } else if (this.pause == 'true' && this.start == 'false') {
      this.pauseTimer();
    } else if (this.pause == 'false' && this.start == 'false') {
      this.resetTimer();
    }
  }

  resetTimer() {
    console.log(this.timer);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      }
    }, 1000);
  }
}
