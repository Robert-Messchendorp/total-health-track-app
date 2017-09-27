import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Recipe } from '../../../models/recipe.model';

import { DataService } from '../../../services/data.service';
import { RecipeService } from '../../../services/feature services/recipe.service';

@Component({
  selector: 'app-tht-recipes',
  templateUrl: './tht-recipes.component.html',
  styleUrls: ['./tht-recipes.component.css']
})
export class ThtRecipesComponent implements OnInit, OnChanges {
  selectedRecord: Recipe;
  entity:string;
  url:string;
  records: {name: string, recipe_name: string, timestamp: number} [] = [];

  constructor(private dataService: DataService, private recipeService: RecipeService, public router: Router) {}
  
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
    }

    ngOnChanges(changes:SimpleChanges) {
      // console.log(changes);
      // console.log(this.router);
    }
}