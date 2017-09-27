import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tht-login',
  templateUrl: './tht-login.component.html',
  styleUrls: ['./tht-login.component.css']
})
export class ThtLoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const url = 'http://localhost:3000/users/signin';
    this.dataService.onCreate(form.value, url)
    .subscribe(
      data => {
        localStorage.setItem('token', data.token );
        localStorage.setItem('userid', data.userId);
        // console.log(data);
        this.router.navigateByUrl('/recipes');
      },
      error => console.error(error)
    );
    form.resetForm();
  } 

}
