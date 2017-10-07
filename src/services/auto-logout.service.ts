import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

import * as moment from 'moment';

const STORE_KEY = 'logoutTime';
const CHECK_INTERVAL = 12000; // in ms

@Injectable()
export class AutoLogoutService {
    clickTime;
    dateString;
    auth;

    get logoutTime() {
        return localStorage.getItem('logoutTime');
    }

    set logoutTime(value) {
        localStorage.setItem('logoutTime', value);
    }

    constructor (private authenticationService: AuthenticationService) {
        this.initListener();
        this.initInterval();
    }

    initListener() {
        document.body.addEventListener('click', () => this.reset());
    }

    reset() {
        this.clickTime = new Date();
        this.dateString = moment(this.clickTime);
        this.logoutTime = this.dateString.add(2, 'hours').format("DD/MM/YYYY HH:mm:ss");
    }

    initInterval() {
        setInterval(() => {
            this.check();
        }, CHECK_INTERVAL)
    }

    check() {
        const currentDate = moment().valueOf()
        const now = new Date(currentDate);
        const dateStringNow = moment(now).format("DD/MM/YYYY HH:mm:ss");
        this.makeLogoutDecision(dateStringNow);
    }

    makeLogoutDecision(currentDateTime) {
        const logoutTime = moment(this.logoutTime, "DD/MM/YYYY HH:mm:ss");
        const difference = moment(logoutTime,"DD/MM/YYYY HH:mm:ss").diff(moment(currentDateTime, "DD/MM/YYYY HH:mm:ss"));
        
        if (difference < 0) {
            this.authenticationService.logout();
        }
    }
}