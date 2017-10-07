import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../../services/authentication.service'; 

@Component({
  selector: 'tht-logout',
  templateUrl: './tht-logout.component.html',
  styleUrls: ['./tht-logout.component.css'],
})
export class ThtLogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  loggedIn() {
    if (localStorage &&
        localStorage.token && 
        localStorage.userid) {
        return true;
    }
  }

  onLogout(){
    this.authenticationService.logout();
  }

}
