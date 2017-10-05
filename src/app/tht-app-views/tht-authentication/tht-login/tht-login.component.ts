import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'tht-login',
  templateUrl: './tht-login.component.html',
  styleUrls: ['./tht-login.component.css']
})
export class ThtLoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  timeLoggedIn: number;
  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const url = 'http://localhost:3000/users/signin';
    this.dataService.onCreate(form.value, url)
    .subscribe(
      data => {
        const dateString = moment(this.timeLoggedIn);
        const logOutTime = dateString.add(2, 'hours').format("DD/MM/YYYY HH:mm:ss");
        localStorage.setItem('token', data.token );
        localStorage.setItem('userid', data.userId);
        localStorage.setItem('timeLoggedIn', data.timeLoggedIn);
        localStorage.setItem('logoutTime', logOutTime);
        this.router.navigateByUrl('/recipes');
      },
      error => console.error(error)
    );
    form.resetForm();
  } 

}
