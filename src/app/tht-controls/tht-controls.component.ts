import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgSwitch }  from '@angular/common';

@Component({
  selector: 'tht-controls',
  templateUrl: './tht-controls.component.html',
  styleUrls: ['./tht-controls.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThtControlsComponent implements OnInit {
  @Input('control') control;

  constructor() { }

  ngOnInit() {
    
  }

}
