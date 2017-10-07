import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';

import * as moment from 'moment';

@Injectable()
export class AuthenticationService {
timeLoggedIn:number;
    constructor(private dataService: DataService, private router: Router) { }

    login(form) {
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
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/');
    }
    
}