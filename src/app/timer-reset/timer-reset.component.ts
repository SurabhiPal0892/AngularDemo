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

  constructor() {}

  ngOnInit() {}

  startClicked(timeLimit) {
    this.timelimit.emit(timeLimit);
    this.isStart.emit('true');
    this.isPaused.emit('false');
  }

  pauseClicked() {
    // this.timelimit.emit(0);
    this.isStart.emit('false');
    this.isPaused.emit('true');
  }

  resetClicked(timeLimit) {
    this.timelimit.emit(timeLimit);
    this.isStart.emit('false');
    this.isPaused.emit('false');
  }
}
