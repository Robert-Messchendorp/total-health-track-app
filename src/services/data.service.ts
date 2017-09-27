import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

import { NotificationService } from './notification.service';

@Injectable()
export class DataService {
    records = [];

    constructor(private http: Http, private notificationService: NotificationService) {}

    onRead(url: string) {
        const headers = new Headers({});
           return this.http.get(url, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.notificationService.handleOnError(error.json());
                return Observable.throw(error.json());
            });
    }

    onCreate(dataObject: object, url:string) {
        const headers = new Headers({'Content-Type': 'application/json'});
        
        if (url === 'http://localhost:3000/recipes') {
            const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
            const user = localStorage.getItem('userid') ? '&userid=' + localStorage.getItem('userid') : '';
            url = url + token + user;
        }

        return this.http.post(url, dataObject, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
            this.notificationService.handleOnError(error.json());
            return Observable.throw(error.json());
        });
    }

    onUpdate(dataObject:object, id: string) {

    }

    onDelete(dataObject:object, id: string) {

    }
}