import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

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
export class AppComponent implements OnInit, OnChanges {
  selectedRecord: Recipe;  
  entity:string;
  records: {name: string, recipe_name: string, timestamp: number} [] = [];
  fields;
  navigation;
  recipe_entity: object;
  
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
    let i;
    // this.menuItemSelected.emit({
    //   menuItemSelected: this.entity
    // });
    console.log(this.navigation);
    for (i = 0; i < this.navigation.length; i++) {
      if (this.entity === this.navigation[i].Entity && this.navigation[i].SubEntities) {
        console.log(this.navigation[i].SubEntities);
      }
    }
    // if (this.entity === this.navigation.Entity && this.navi)
    // for (let object in this.navigation) {
    //   console.log(object);
    // }
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

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
 