import  { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Recipe } from '../../models/recipe.model';

import { NotificationService } from '../../services/notification.service';

@Injectable()
export class RecipeService {
  entitySelected = new EventEmitter<Recipe>();  
  
  
  private recipes: Recipe[] = [];

  constructor(private http: Http, private notificationService: NotificationService){}

  // Replace the new Recipe stuff to the component

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(url) {
    const headers = new Headers({});
    return this.http.get(url, {headers: headers})
     .map((response: Response) => response.json())
     .catch((error: Response) => {
         this.notificationService.handleOnError(error.json());
         return Observable.throw(error.json());
     });
  }

  postRecipes() {
    // Call the DataService onCreate method here
    
  }
}