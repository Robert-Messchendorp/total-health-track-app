import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgSwitch }  from '@angular/common';
import {MdChipInputEvent, ENTER} from '@angular/material';

const COMMA = 188;

@Component({
  selector: 'tht-controls',
  templateUrl: './tht-controls.component.html',
  styleUrls: ['./tht-controls.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThtControlsComponent implements OnInit {
  @Input('control') control;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  ingredients = [
    
  ];

  constructor() { }

  ngOnInit() {
    
  }

  add(event: MdChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.ingredients.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.ingredients.indexOf(fruit);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

}
