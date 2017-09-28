import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { ApplicationFields } from '../models/application.model';

import { DataService } from '../services/data.service';
import { RecipeService } from '../services/feature services/recipe.service';
import { StartupService } from '../services/startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
selectedRecord: Recipe;  
  // title = 'Stefan Boonstra';
  // todo = '';
  entity:string;
  // records = [{
  //   name: 'Stefan Boonstra',
  //   recipe_name: 'Whatever Anette cooks'
  // },
  // {
  //   name: 'Robert Messchendorp',
  //   recipe_name: 'Pasta Pesto Pollo'
  // }];
  records: {name: string, recipe_name: string, timestamp: number} [] = [];
  fields;
  navigation;

  @Output() menuItemSelected = new EventEmitter<{menuItemSelected:string}>();

  constructor(private dataService: DataService, private recipeService: RecipeService, private startupService: StartupService) {}

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
          console.log(this.navigation);
        }
      )
  }
}
 