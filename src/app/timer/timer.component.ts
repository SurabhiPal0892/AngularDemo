import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  countdownTimer: any;
  isPaused: any;
  isStart: any;
  pauseClickCount: any = 0;
  startClickCount: any = 0;
  constructor() {}

  ngOnInit() {}

  getTimer(count) {
    this.countdownTimer = count;
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
    this.pauseClickCount++;
  }

  isStartClicked(start) {
    this.isStart = start;
    this.startClickCount++;
  }
}
