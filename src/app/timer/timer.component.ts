import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  countdownTimer: any;
  constructor() {}

  ngOnInit() {}

  displayCounter(count) {
    this.countdownTimer = count;
    console.log(this.countdownTimer);
  }
}
