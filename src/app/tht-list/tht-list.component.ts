import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Recipe } from '../../models/recipe.model'; // Import the model here to to use it below by defining where listItems will be coming from (Recipe object from the model)

import { RecipeService } from '../../services/feature services/recipe.service';

@Component({
  selector: 'tht-list',
  templateUrl: './tht-list.component.html',
  styleUrls: ['./tht-list.component.css'],
  providers: []
})
// First static component, without interaction possibilities with other components

// export class ThtListComponent implements OnInit {
//   // listItems = ['Item 1', 'Item 2']; Static way of setting an array of items for*ngFor
 // More dynamic way of creating an array of items for *ngFor, for now making use of a static (no live data) model
//   listItemName = '';

//   constructor() { }

//   ngOnInit() {
//   }

//   // onAddNewListItem() {
//   //   this.listItems.push(this.listItemName);
//   // }

// }

// Below we added code to be able to communicate between multiple components
// In the use case here we want to show a record added by the dialogue to be added to the overview list
export class ThtListComponent implements OnInit, OnChanges {
  recipes: Recipe[ ];
  // @Input() record: {name: string, recipe_name:string, timeStamp: string}; // record === component property
  // Same as above but with an alias used for record, so in the parent you can reference to this alias
  // @Input('listRecord') record: {name: string, recipe_name:string, timeStamp: string};
  // @Input disableRipple: true;
  @Input('listRecord') record: Recipe;
  selectedRecord;
  @Input('tableDefinition') tableToPassOn;
  tableDefinition;
  recordSelected: boolean;
  

  
  constructor( private recipeService:RecipeService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.tableDefinition = changes.tableToPassOn;
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onSelected(){
  //   this.recipeService.entitySelected.emit(this.record);
  // }

  // onRecordSelected(recordData: object) {
  //   this.selectedRecord = recordData;
  //   console.log(this.selectedRecord);
  //   this.recipeService.entitySelected.emit(this.selectedRecord);
  // } 

}

