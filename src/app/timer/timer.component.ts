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
  counts: { pause: any; start: any };
  actionLog: { started: any; paused: any };
  timer: { time: any; isStart: any; isPaused: any };
  constructor() {}

  ngOnInit() {}

  getTimer(count) {
    this.countdownTimer = count;
    this.timer = {
      time: this.countdownTimer,
      isStart: this.isStart,
      isPaused: this.isPaused
    };
  }

  isPauseClicked(paused) {
    this.isPaused = paused;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
    this.timer = {
      time: this.countdownTimer,
      isStart: this.isStart,
      isPaused: this.isPaused
    };
  }

  isStartClicked(start) {
    this.isStart = start;
    this.actionLog = { started: this.isStart, paused: this.isPaused };
    this.timer = {
      time: this.countdownTimer,
      isStart: this.isStart,
      isPaused: this.isPaused
    };
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
