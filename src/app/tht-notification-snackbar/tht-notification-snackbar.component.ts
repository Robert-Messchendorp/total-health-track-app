import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MdSnackBar, MD_SNACK_BAR_DATA } from '@angular/material';

import { Notification } from '../../models/notification.model'; 

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'tht-notification-snackbar',
  templateUrl: './tht-notification-snackbar.component.html',
  styleUrls: ['./tht-notification-snackbar.component.css']
})
export class ThtNotificationSnackbarComponent implements OnInit {

  constructor(public snackBar: MdSnackBar, private notificationService: NotificationService) { }
  error: Notification;
  success: Notification;
  componentToLoad;

  ngOnInit() {
    this.notificationService.errorNotificationTriggered
      .subscribe(
        (error: Notification) => {
          this.error = error;
          this.componentToLoad = SnackBarErrorComponent;
          this.openNotificationSnackBar(this.error, this.componentToLoad);
        }
      );

    this.notificationService.successNotificationTriggered
      .subscribe(
        (success: Notification) => {
          this.success = success;
          this.componentToLoad = SnackBarSuccessComponent;
          this.openNotificationSnackBar(this.success, this.componentToLoad);
        }
      )
    
  };

  openNotificationSnackBar(notification, component) {
    // implement here the call to open the snack bar
    this.snackBar.openFromComponent(component, {
      duration: 500000,
      data: notification
    });
  }
}

@Component({
  selector: 'error-snackbar',
  templateUrl: './tht-notification-snackbar-templates/tht-error-snackbar.html',
  styleUrls: ['./tht-notification-snackbar.component.css'],
})
export class SnackBarErrorComponent {
  error = {
    type: String,
    title: String,
    message: String,
    severity: String
  };

  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any, public snackbar:MdSnackBar) {
    this.error.type = data.type;
    this.error.title = data.title;
    this.error.message = data.message;
    this.error.severity = data.severity;
  }

  onRegister() {
    //send event to change the selectedIndex
  }

  onRetry() {
    this.snackbar.dismiss();
  }
}

@Component({
  selector: 'success-snackbar',
  templateUrl: './tht-notification-snackbar-templates/tht-success-snackbar.html',
  styleUrls: ['./tht-notification-snackbar.component.css'],
})
export class SnackBarSuccessComponent {
  success = {
    type: String,
    title: String,
    message: String,
    severity: String,
    record: Object
  };

  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any, public snackbar:MdSnackBar) {
    this.success.type = data.type;
    this.success.title = data.title;
    this.success.message = data.message;
    this.success.severity = data.severity;
    this.success.record = data.record;
  }

  onClose() {
    this.snackbar.dismiss();
  }

  onUpdate() {
    console.log(this.success.record);
    // implement a service or in the recipe service implement a method that emits an event
    // listen in the add-record-dialogue for the event and create a new update template
    // in the component for this updateRecordDialog implement a set values method that takes the
    // this.success.record values and puts them in the dialogue
    // button in the new template should not say add but update
  }
}
