import { Component, OnInit } from '@angular/core';
import { records } from '../students-marks';

@Component({
  selector: 'app-students-marks',
  templateUrl: './students-marks.component.html',
  styleUrls: ['./students-marks.component.css']
})
export class StudentsMarksComponent implements OnInit {
  headers: string[];
  constructor() {}
  studentRecords = records;
  ngOnInit() {
    this.headers = Object.keys(this.studentRecords[0]);
  }
}
