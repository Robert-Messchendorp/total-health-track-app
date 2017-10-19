// Imports for Core Angular functions
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { NgSwitch } from '@angular/common';
import { MomentModule } from 'angular2-moment';

// Imports for Angular Material dependencies
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MdButtonModule,
          MdIconModule,
          MdCheckboxModule,
          MdDialogModule,
          MdInputModule,
          MdToolbarModule,
          MdSidenavModule,
          MdTableModule,
          MdCardModule,
          MdRadioModule,
          MdDatepickerModule,
          MdSliderModule,
          MdSlideToggleModule,
          MdFormFieldModule,
          MdTabsModule,
          MdSnackBarModule,
          MdNativeDateModule,
          MatChipsModule,
          MatTooltipModule,
          MatMenuModule,
          MatPaginatorModule
         } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';

// Imports for ng2-charts
import { ChartsModule } from 'ng2-charts';

          
// Imports of Components of the App
import { AppComponent } from './app.component';
import { ThtMenuComponent } from './tht-toolbar/tht-menu/tht-menu.component';
import { ThtListComponent } from './tht-list/tht-list.component';
import { ThtAddRecordDialogueComponent,DialogAddRecordDialog, DialogUpdateRecordDialog } from './tht-add-record-dialogue/tht-add-record-dialogue.component';
import { ThtControlsComponent } from './tht-controls/tht-controls.component';
import { ThtDetailComponent } from './tht-detail/tht-detail.component';
import { ThtToolbarComponent } from './tht-toolbar/tht-toolbar.component';
import { ThtDataTableComponent } from './tht-list/tht-data-table/tht-data-table.component';
import { ThtGridListComponent } from './tht-list/tht-grid-list/tht-grid-list.component';
import { ThtInformationCardComponent } from './tht-information-card/tht-information-card.component';
import { ThtRecipesComponent } from './tht-app-views/tht-recipes/tht-recipes.component';
import { ThtStocksAndSharesComponent } from './tht-app-views/tht-stocks-and-shares/tht-stocks-and-shares.component';
import { ThtInputCardComponent } from './tht-input-card/tht-input-card/tht-input-card.component';
import { ThtPlaygroundComponent } from './tht-app-views/tht-playground/tht-playground.component';
import { ThtAuthenticationComponent } from './tht-app-views/tht-authentication/tht-authentication.component';
import { ThtRegisterComponent } from './tht-app-views/tht-authentication/tht-register/tht-register.component';
import { ThtLoginComponent } from './tht-app-views/tht-authentication/tht-login/tht-login.component';
import { ThtLogoutComponent } from './tht-app-views/tht-authentication/tht-logout/tht-logout.component';
import { ThtNotificationSnackbarComponent, SnackBarErrorComponent, SnackBarSuccessComponent } from './tht-notification-snackbar/tht-notification-snackbar.component';

// Imports of application wide services
import { ShoppingListService } from '../services/feature services/shopping-list.service';
import { DataService } from '../services/data.service';
import { StartupService} from '../services/startup.service';
import { NotificationService } from '../services/notification.service';
import { AuthenticationService } from '../services/authentication.service';
import { AutoLogoutService } from '../services/auto-logout.service';
import { AuthGuardService } from '../services/authGuard.service';

// Imports routing
import { routing } from './app.routing';

import 'hammerjs';

// running startup service
export function init(config: StartupService) {
  return () => {
    config.getApplicationFields();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ThtMenuComponent,
    ThtListComponent,
    ThtAddRecordDialogueComponent,
    ThtControlsComponent,
    ThtDetailComponent,
    DialogAddRecordDialog,
    DialogUpdateRecordDialog,
    ThtToolbarComponent,
    ThtDataTableComponent,
    ThtGridListComponent,
    ThtInformationCardComponent,
    ThtRecipesComponent,
    ThtStocksAndSharesComponent,
    ThtInputCardComponent,
    ThtPlaygroundComponent,
    ThtAuthenticationComponent,
    ThtRegisterComponent,
    ThtLoginComponent,
    ThtLogoutComponent,
    ThtNotificationSnackbarComponent,
    SnackBarErrorComponent,
    SnackBarSuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdDialogModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTableModule,
    FlexLayoutModule,
    CdkTableModule,
    MdCardModule,
    MdRadioModule,
    MdDatepickerModule,
    MdSliderModule,
    MdSlideToggleModule,
    routing,
    MdTabsModule,
    MdSnackBarModule,
    MdNativeDateModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatTooltipModule, 
    MomentModule,
    MatMenuModule,
    MatPaginatorModule,
    ChartsModule
  ],
  entryComponents: [
    ThtAddRecordDialogueComponent,
    DialogAddRecordDialog,
    SnackBarErrorComponent,
    SnackBarSuccessComponent,
    DialogUpdateRecordDialog
  ],
  providers: [
    ShoppingListService,
    DataService,
    NotificationService,
    AuthenticationService,
    AutoLogoutService,
    AuthGuardService,
  {
    'provide': APP_INITIALIZER,
    'useFactory': init,
    'deps': [StartupService],
    'multi': true
  }, StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// You can make a custom component from angular material components
// ToDo: Implement this later when Udemy course explained how to make custom components

// import { MdButtonModule, MdCheckboxModule } from '@angular/material';

// @NgModule({
//   imports: [MdButtonModule, MdCheckboxModule],
//   exports: [MdButtonModule, MdCheckboxModule],
// })

// export class MyCustomAngularMaterialModule { }
