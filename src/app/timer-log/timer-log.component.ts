import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.css']
})
export class TimerLogComponent implements OnInit {
  @Input() pause: any;
  @Input() start: any;
  arr: any = [];
  action: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    let time = Date.now();
    let obj = {};
    if (this.pause == 'true') {
      obj = { action: 'Paused', time: time };
      this.arr.push(obj);
    }
    if (this.start == 'true') {
      obj = { action: 'Started', time: time };
      this.arr.push(obj);
    }
  }
}
