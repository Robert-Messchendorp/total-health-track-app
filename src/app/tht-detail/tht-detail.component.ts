import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/feature services/recipe.service';

import { ShoppingListItem } from '../../models/shoppinglist.model';
import { ShoppingListService } from '../../services/feature services/shopping-list.service';

@Component({
  selector: 'tht-detail',
  templateUrl: './tht-detail.component.html',
  styleUrls: ['./tht-detail.component.css'],
})
export class ThtDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredients: ShoppingListItem[];
  name: string;
  amount: string;
  selectedRecord;
  constructor( private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  
  ngOnInit() {
    // this.ingredients = this.shoppingListService.getIngredients();
    this.recipeService.entitySelected
    .subscribe(
      (recipe: Recipe) => {
        const url = "http://localhost:3000/recipes/" + this.recipe.recipe_Id;
        this.recipeService.getRecipe(url)
          .subscribe(
            (result: Recipe) => {
              this.selectedRecord = result;
              this.ingredients = this.selectedRecord.record.ingredients;
              console.log(this.ingredients);
              console.log(this.selectedRecord);
            }
          )
      }
    );
  }

  onAddItemToShoppingList(ingredient:any) {
    // this.name = ingredient.name;
    // this.amount = ingredient.amount;
    this.shoppingListService.addIngredientsToShoppingList(ingredient);
  }

  

}
