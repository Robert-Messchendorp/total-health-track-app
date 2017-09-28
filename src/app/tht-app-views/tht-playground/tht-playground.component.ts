import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../../services/data.service';
// import { DataManagementService } from '../../../services/data-management.service';
import { NotificationService } from '../../../services/notification.service';

import { Notification } from '../../../models/notification.model';


@Component({
  selector: 'tht-playground',
  templateUrl: './tht-playground.component.html',
  styleUrls: ['./tht-playground.component.css']
})
export class ThtPlaygroundComponent implements OnInit {
  controls;
  entity = 'recipes';
  constructor(private notificationService: NotificationService) {

   }


  ngOnInit() {
    
  }

}
