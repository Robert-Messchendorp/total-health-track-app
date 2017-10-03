import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/feature services/recipe.service';

import { ShoppingListItem } from '../../models/shoppinglist.model';
import { ShoppingListService } from '../../services/feature services/shopping-list.service';
import * as moment from 'moment';
@Component({
  selector: 'tht-detail',
  templateUrl: './tht-detail.component.html',
  styleUrls: ['./tht-detail.component.css'],
})
export class ThtDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe;
  ingredients: ShoppingListItem[] = [ ];
  firstColumn: ShoppingListItem[] = [ ];
  secondColumn: ShoppingListItem[] = [ ];
  thirdColumn: ShoppingListItem[]= [ ];
  dateCreated: string;
  name: string;
  amount: string;
  selectedRecord;
  constructor( private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  
  ngOnInit() {
    // this.ingredients = this.shoppingListService.getIngredients();
    console.log(this.recipe);
  }

  onAddItemToShoppingList(ingredient:any) {
    // this.name = ingredient.name;
    // this.amount = ingredient.amount;
    this.shoppingListService.addIngredientsToShoppingList(ingredient);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.recipe.currentValue) {
      const url = "http://localhost:3000/recipes/" + this.recipe.recipe_Id;
      this.recipeService.getRecipe(url)
        .subscribe(
          (result: Recipe) => {
            this.selectedRecord = result;
            this.ingredients = [ ];
            this.createRecipeDetailCard(this.selectedRecord); 
          }
        )
    }
  }

  createRecipeDetailCard(selectedRecord) {
    this.ingredients = selectedRecord.record.ingredients;
    this.firstColumn = [];
    this.secondColumn = [];
    this.thirdColumn = [];

    for (let i = 0; i < this.ingredients.length; i++) {
      if ( i < 4) {
        this.firstColumn.push(this.ingredients[i]);
      }

      if (i > 3 && i < 8) {
        this.secondColumn.push(this.ingredients[i]);
      }

      if ( i > 8) {
        this.thirdColumn.push(this.ingredients[i]);
      }
    }

    console.log(this.firstColumn);
    console.log(this.secondColumn);

    this.dateCreated = moment(this.selectedRecord.record.date_created).format("DD/MM/YYYY");
  }
}
