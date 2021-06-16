import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counts',
  templateUrl: './click-counts.component.html',
  styleUrls: ['./click-counts.component.css']
})
export class ClickCountsComponent implements OnInit {
  @Input() pauseCounts: any;
  @Input() startCounts: any;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(){
    console.log(this.pauseCounts,this.startCounts)
  }
}
