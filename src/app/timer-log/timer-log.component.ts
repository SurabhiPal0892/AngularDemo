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
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    let time = Date.now();
    if (this.pause) {
      this.arr.push(`${time}`);
    }
    if (this.start) {
      this.arr.push(`${time}`);
    }
  }
}
