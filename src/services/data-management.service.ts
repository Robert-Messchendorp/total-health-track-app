import { Injectable, EventEmitter } from'@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { NotificationService } from'./notification.service';

@Injectable()
export class DataManagementService {
    chosenentity;
    controls;
    url:string = 'http://localhost:3000/ams';
    

    constructor(private dataService: DataService, private notificationService:NotificationService){}

    getCollection ( entity: string ) {

    }

    getEntity () {

    }

    getControls() {

    }

    getControlsByEntity ( entity:string ) {
        // this.chosenentity = entity;
        // return this.chosenentity.slice();
          this.dataService.onRead(this.url)
            .subscribe(
                (response: Response) => {
                this.controls = response;
                const result = response;
                console.log(Response);

                this.notificationService.handleOnSuccess(this.controls);
            },
                (error) => console.log(error)
            );
    }


}