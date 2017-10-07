import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { AutoLogoutService } from '../../../../services/auto-logout.service';

@Component({
  selector: 'tht-login',
  templateUrl: './tht-login.component.html',
  styleUrls: ['./tht-login.component.css']
})
export class ThtLoginComponent implements OnInit {

  constructor(private dataService: DataService, private authenticationService: AuthenticationService, private autoLogoutService: AutoLogoutService) { }
  timeLoggedIn: number;
  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.authenticationService.login(form);
    this.autoLogoutService.initListener();
    this.autoLogoutService.initInterval();
    form.resetForm();
  } 

}
