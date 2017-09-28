import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../../services/data.service';
import { DataManagementService } from '../../../services/data-management.service';
import { NotificationService } from '../../../services/notification.service';

import { Notification } from '../../../models/notification.model';


@Component({
  selector: 'tht-playground',
  templateUrl: './tht-playground.component.html',
  styleUrls: ['./tht-playground.component.css'],
  providers: [DataManagementService]
})
export class ThtPlaygroundComponent implements OnInit {
  controls;
  entity = 'recipes';
  constructor(private dataManagementService: DataManagementService, private notificationService: NotificationService) {

   }


  ngOnInit() {
    this.dataManagementService.getControlsByEntity(this.entity);
    this.notificationService.successNotificationTriggered
    .subscribe(
      (success: Notification) => {
       const application = success;
       const navigation = application.record[0].Navigation;
       this.controls = navigation[0].SubEntities[0].InputCard.Controls;

        
        console.log(this.controls);
      })
  }

}
