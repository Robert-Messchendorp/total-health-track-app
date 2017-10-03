import { ShoppingListItem } from '../../models/shoppinglist.model';
import { EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter <ShoppingListItem[]>();

    private ingredients: ShoppingListItem[ ] = [
        
      ];

      getIngredients( ) {
        return this.ingredients.slice();
      }

      addIngredientsToShoppingList(ingredient) {
        // console.log(ingredient);
        // let stringOfIngredients = ingredient.stringify();
        // new ShoppingListItem(ingredient[0], ingredient[1]);
        // console.log(ShoppingListItem);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}