import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { AutoLogoutService } from './auto-logout.service';

import { ApplicationFields } from '../models/application.model';

@Injectable()
export class StartupService {
    constructor(private http: Http) {

    }

    getApplicationFields() {
        const headers = new Headers({});
        const url = "http://localhost:3000/ams";

        return this.http.get(url, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getApplicationFieldsByApplicationComponent(entity: string, subEntity: string) {

    }

    initializeAutomaticLogoutService() {
        // this.autoLogoutService.initListener();
        // this.autoLogoutService.initInterval();
    }
}