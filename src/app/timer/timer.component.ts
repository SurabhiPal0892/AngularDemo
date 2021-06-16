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
  pauseCount: any = 0;
  startCount: any = 0;
  constructor() {}

  ngOnInit() {}

  getTimer(count) {
    this.countdownTimer = count;
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
  }

  isStartClicked(start) {
    this.isStart = start;
  }

  getPauseCounts(counts) {
    this.pauseCount = counts;
    console.log(this.pauseCount);
  }

  getStartCounts(counts) {
    this.startCount = counts;
    console.log(this.startCount);
  }
}
