import { EventEmitter } from '@angular/core';
import { Notification } from '../models/notification.model';

export class NotificationService {
    // errorOccured = new EventEmitter<Error>();
    errorNotificationTriggered = new EventEmitter<Notification>();
    successNotificationTriggered = new EventEmitter<Notification>();
    applicationConfigNotification = new EventEmitter<Notification>();
    
    handleOnError(notification: any) {
        // console.log(errorObject);
        const notificationData = new Notification(notification.type, notification.title, notification.error.message, notification.severity, notification.record);
        this.errorNotificationTriggered.emit(notificationData);
    }

    handleOnSuccess(notification: any) {
        const notificationData = new Notification(notification.type, notification.title, notification.message, notification.severity, notification.record);
        if(notificationData.type !== 'ApplicationConfigurationManagement') {
            this.successNotificationTriggered.emit(notificationData);
        } else {
            this.applicationConfigNotification.emit(notificationData);
        }
    }
}