import {  Component,
          OnInit,
          EventEmitter,
          Output,
          ViewChild,
          OnChanges,
          SimpleChanges,
          ElementRef } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

import { NotificationService } from '../../services/notification.service';
import { DataService } from '../../services/data.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'tht-add-record-dialogue',
  templateUrl: './tht-add-record-dialogue.component.html',
  styleUrls: ['./tht-add-record-dialogue.component.css']
})
export class ThtAddRecordDialogueComponent implements OnInit {
  record;// { name:null, recipe_name:null, timeStamp: null}
  url;
  @Output() recordCreated = new EventEmitter<{recipe_name: string, description: string, date_created: string}>();
  @Output() recipeAdded = new EventEmitter<{Recipe}>();
  
  constructor(public dialog: MdDialog, private notificationService: NotificationService, private dataService: DataService) { }

  ngOnInit() {
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogAddRecordDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.record = result;
      this.recordCreated.emit({
        // TODO Loop over multiple adds
        recipe_name: this.record[0].recipe_name,
        description: this.record[0].description,
        date_created: this.record[0].timestamp
      });
      this.url = 'http://localhost:3000/recipes';
      // this.errorService.handleOnError(this.record);
      this.dataService.onCreate(this.record, this.url)
        .subscribe(
          (recipe: Recipe) => {
            this.notificationService.handleOnSuccess(recipe);
            this.recipeAdded.emit();
          }
        ) 
    });
  }
}

@Component({
  selector: 'dialog-add-record-dialog',
  templateUrl: './tht-add-record-dialogue-templates/add-recipe-dialogue.html'
})
export class DialogAddRecordDialog implements OnInit, OnChanges {
  public recipe_name:string;
  public description: string;
  public timeStamp:number;
  record = [ ]; 


  @ViewChild('nameInput') nameInput:ElementRef;

  onAddRecord() {
    this.timeStamp = Date.now();
    // make timestamp human readable
    
    this.record.push({
      recipe_name: this.recipe_name,
      description: this.description,
      date_created: this.timeStamp
    });

    // clear form to allow for multiple adds per time
  }

  constructor(public dialogRef: MdDialogRef<DialogAddRecordDialog>) {}
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }
  ngOnInit() {
  }

  
}
