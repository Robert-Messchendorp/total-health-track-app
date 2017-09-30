import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { ApplicationFields } from '../models/application.model';
import { Notification } from '../models/notification.model';

import { DataService } from '../services/data.service';
import { RecipeService } from '../services/feature services/recipe.service';
import { StartupService } from '../services/startup.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
  selectedRecord: Recipe;  
  entity:string;
  records: {name: string, recipe_name: string, timestamp: number} [] = [];
  fields;
  navigation;
  
  @Output() menuItemSelected = new EventEmitter<{menuItemSelected:string}>();

    constructor(private dataService: DataService, private recipeService: RecipeService, private startupService: StartupService, private notificationService:NotificationService) {}
  onRecordCreated(recordData: { name:string, recipe_name: string, timestamp: number  }) {
    this.records.push({
      name: recordData.name,
      recipe_name: recordData.recipe_name,
      timestamp: recordData.timestamp
    })
  }

  onButtonPress(eventData: {name:string}, sidenavElement) {
    sidenavElement.open();
  }

  onChosenMenuItem(menuData: {chosenMenuItem:string}, sidenavElement) {
    this.entity = menuData.chosenMenuItem;
    this.menuItemSelected.emit({
      menuItemSelected: this.entity
    });
    sidenavElement.close();
  }

  ngOnInit() {

    this.records = this.dataService.records;
    this.recipeService.entitySelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecord = recipe;
        }
      );

    this.startupService.getApplicationFields()
      .subscribe(
        (applicationFields: ApplicationFields) => {

          this.fields = applicationFields;
          this.navigation = [...this.fields.record[0].Navigation];
          this.notificationService.broadcastApplication(this.fields);
        }
      )
  }
}
 