import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tht-logout',
  templateUrl: './tht-logout.component.html',
  styleUrls: ['./tht-logout.component.css']
})
export class ThtLogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    if (localStorage &&
        localStorage.token && 
        localStorage.userid) {
        return true;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
