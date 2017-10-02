import { Component, OnInit, ViewEncapsulation, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { NgSwitch }  from '@angular/common';
import {MdChipInputEvent, ENTER} from '@angular/material';

const COMMA = 188;

@Component({
  selector: 'tht-controls',
  templateUrl: './tht-controls.component.html',
  styleUrls: ['./tht-controls.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThtControlsComponent implements OnInit, OnChanges {
  @Input('control') control;
  @Output('control.Value') value;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];
  

  constructor() {
  
   }

  ngOnInit() {
    this.control["Value"] = [];
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  add(event: MdChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.control.Value.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.control.Value.indexOf(fruit);

    if (index >= 0) {
      this.control.Value.splice(index, 1);
    }
  }


}
