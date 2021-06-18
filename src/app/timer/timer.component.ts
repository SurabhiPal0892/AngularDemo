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
  counts = { pause: 0, start: 0 };
  actionLog = { started: 'false', paused: 'false' };
  constructor() {}

  ngOnInit() {}

  getTimer(count) {
    this.countdownTimer = count;
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
  }

  isStartClicked(start) {
    this.isStart = start;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
  }

  getPauseCounts(counts) {
    this.pauseCount = counts;
    this.counts = { start: this.startCount, pause: this.pauseCount };
  }

  getStartCounts(counts) {
    this.startCount = counts;
    this.counts = { start: this.startCount, pause: this.pauseCount };
  }
}
