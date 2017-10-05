import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Recipe } from '../../../models/recipe.model';
import { Notification } from '../../../models/notification.model';

import { DataService } from '../../../services/data.service';
import { RecipeService } from '../../../services/feature services/recipe.service';
import { DataManagementService } from  '../../../services/data-management.service';
import { NotificationService } from '../../../services/notification.service'


@Component({
  selector: 'app-tht-recipes',
  templateUrl: './tht-recipes.component.html',
  styleUrls: ['./tht-recipes.component.css'],
  providers: [DataManagementService]
})
export class ThtRecipesComponent implements OnInit, OnChanges {
  selectedRecord: Recipe;
  entity:string;
  url:string;
  records: {name: string, recipe_name: string, timestamp: number} [] = [];
  currentEntity;
  tableDefinition;
  inputCard;

  constructor(private dataService: DataService, 
              private recipeService: RecipeService, 
              private dataManagementService: DataManagementService,
              private notificationService: NotificationService,
              public router: Router ) {}
  
    onRecordCreated(recordData: { name:string, recipe_name: string, timestamp: number  }) {
      this.records.push({
        name: recordData.name,
        recipe_name: recordData.recipe_name,
        timestamp: recordData.timestamp
      })
    }
  
    onChosenMenuItem(menuData: {chosenMenuItem:string}, sidenavElement) {
      this.entity = menuData.chosenMenuItem;
      // TODO: Implement routing navigation from menu over here
      sidenavElement.close();
    }
  
    ngOnInit() {
      this.records = this.dataService.records;
      this.url = this.router.url;
      this.entity = this.url.substring(1);
      this.recipeService.entitySelected
        .subscribe(
          (recipe: Recipe) => {
            this.selectedRecord = recipe;
          }
        );

        this.dataManagementService.getControlsByEntity(this.entity);
        this.notificationService.applicationConfigNotification
        .subscribe(
          (success: Notification) => {
           const application = success;
           const navigation = application.record[0].Navigation;
           const currentRoute = this.router.url;
           this.matchCurrentNavigation(navigation, currentRoute);
          });
    };

    ngOnChanges(changes:SimpleChanges) {
      // console.log(changes);
      // console.log(this.router);
    }

    matchCurrentNavigation(navigation, currentRoute) {
      for (let property of navigation) {
        for (let router of property.SubEntities) {
          if (router.Router === currentRoute) {
            this.currentEntity = router;
            if (this.currentEntity.DataTable) {
              this.matchTable(this.currentEntity.DataTable);
            }

            if (this.currentEntity.InputCard) {
              this.matchInputCard(this.currentEntity.InputCard);
            }
          }
        }
      }
    };

    matchTable(dataTable) {
      this.tableDefinition = dataTable;
    };

    matchInputCard(inputCard) {
      this.inputCard = inputCard;
    };

  }