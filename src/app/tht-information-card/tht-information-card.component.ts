import { Component, OnInit } from '@angular/core';

import { ShoppingListItem } from '../../models/shoppinglist.model';
import { ShoppingListService } from '../../services/feature services/shopping-list.service';

@Component({
  selector: 'tht-information-card',
  templateUrl: './tht-information-card.component.html',
  styleUrls: ['./tht-information-card.component.css'],
  providers: []
})
export class ThtInformationCardComponent implements OnInit {
  ingredientsOnShoppingList: ShoppingListItem[];
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: ShoppingListItem[]) => {
          this.ingredientsOnShoppingList = ingredients;
        } 
      )
  }

}
