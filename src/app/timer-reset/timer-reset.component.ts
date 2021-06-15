import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-reset',
  templateUrl: './timer-reset.component.html',
  styleUrls: ['./timer-reset.component.css']
})
export class TimerResetComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  btnName: string = 'Start';

  constructor() {}

  ngOnInit() {}

  valueChanged(timeLimit) {
    // You can give any function name
    if (this.btnName == 'Start') {
      this.btnName = 'Pause';
      this.valueChange.emit(timeLimit);
    } else {
      this.btnName = 'Start';
      this.valueChange.emit('Stop');
    }
  }
}
