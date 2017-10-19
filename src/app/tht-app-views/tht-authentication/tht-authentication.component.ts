import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tht-authentication',
  templateUrl: './tht-authentication.component.html',
  styleUrls: ['./tht-authentication.component.css']
})
export class ThtAuthenticationComponent implements OnInit {
  selectedIndex;
  constructor() { }

  ngOnInit() {
    this.selectedIndex = 1;
  }


}
