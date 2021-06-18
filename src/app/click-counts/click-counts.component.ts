import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit {
  @Input() counts: any = {};

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.counts);
  }
}
