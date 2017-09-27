import  { EventEmitter } from '@angular/core';

import { Recipe } from '../../models/recipe.model';

export class RecipeService {
  entitySelected = new EventEmitter<Recipe>();  
  
  
  private recipes: Recipe[] = [];

  // Replace the new Recipe stuff to the component

  getRecipes() {
      return this.recipes.slice();
  }

  postRecipes() {
    // Call the DataService onCreate method here
    
  }
}