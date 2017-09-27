import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tht-toolbar',
  templateUrl: './tht-toolbar.component.html',
  styleUrls: ['./tht-toolbar.component.css']
})
export class ThtToolbarComponent implements OnInit {
  @Output() menuActivated = new EventEmitter<{}>();
  
  constructor() { 
  
  }

  openSidenav() {
    this.menuActivated.emit({});
  }

  ngOnInit() {
  }

  loggedIn() {
    if (localStorage.getItem('token') !== null &&
        localStorage.getItem('userid') !== null) {
          return true;
        }
  }
}
