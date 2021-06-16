import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit {
  @Output() timelimit = new EventEmitter();
  @Output() isPaused = new EventEmitter();
  @Output() isStart = new EventEmitter();
  @Output() pauseCounts = new EventEmitter();
  @Output() startCounts = new EventEmitter();
  pauseClick = 0;
  startClick = 0;
  constructor() {}

  ngOnInit() {}

  startClicked(timeLimit) {
    this.timelimit.emit(timeLimit);
    this.isStart.emit('true');
    this.isPaused.emit('false');
    this.startClick++;
    this.startCounts.emit(this.startClick);
  }

  pauseClicked() {
    // this.timelimit.emit(0);
    this.isStart.emit('false');
    this.isPaused.emit('true');
    this.pauseClick++;
    this.pauseCounts.emit(this.pauseClick);
  }

  resetClicked(timeLimit) {
    this.timelimit.emit(timeLimit);
    this.isStart.emit('false');
    this.isPaused.emit('false');
    this.startClick = 0;
    this.pauseClick = 0;
    this.pauseCounts.emit(this.pauseClick);
    this.startCounts.emit(this.startClick);
  }
}
