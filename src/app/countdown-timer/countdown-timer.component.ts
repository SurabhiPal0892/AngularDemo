import { formatPercent } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() countdown: any;
  interval: number;
  previousValue: any;
  timer: any;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.startTimer();
  }

  startTimer() {
   
  }
}
