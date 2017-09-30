import {  Component,
          OnInit,
          EventEmitter,
          Output,
          ViewChild,
          OnChanges,
          SimpleChanges,
          ElementRef,
          Input,
          Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
          
import { MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { NotificationService } from '../../services/notification.service';
import { DataManagementService } from '../../services/data-management.service';
import { DataService } from '../../services/data.service';

import { Recipe } from '../../models/recipe.model';
import { Notification } from '../../models/notification.model';



@Component({
  selector: 'tht-add-record-dialogue',
  templateUrl: './tht-add-record-dialogue.component.html',
  styleUrls: ['./tht-add-record-dialogue.component.css']
})
export class ThtAddRecordDialogueComponent implements OnInit, OnChanges {
  record;// { name:null, recipe_name:null, timeStamp: null}
  url;
  @Output() recordCreated = new EventEmitter<{recipe_name:string, preperation:string, ingredients:object, category:string, date_created:string, costs_per_person:number,preparation_time:number }>();
  @Output() recipeAdded = new EventEmitter<{Recipe}>();
  @Input('inputCard') inputCard;
  inputCardDefinition; 
  
  
  constructor(public dialog: MdDialog, private dataService: DataService, private notificationService: NotificationService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.inputCard.currentValue && !changes.inputCard.previousValue) {
      this.inputCardDefinition = changes.inputCard.currentValue;
    }
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogAddRecordDialog, {
      data:this.inputCardDefinition
    });

    dialogRef.afterClosed().subscribe(result => {
      this.record = result;
      this.recordCreated.emit({
      //   // TODO Loop over multiple adds
        recipe_name: this.record[0].recipe_name,
        preperation: this.record[0].preperation,
        date_created: this.record[0].timestamp,
        ingredients: this.record[0].ingredients,
        category: this.record[0].category,
        costs_per_person: this.record[0].costs_per_person,
        preparation_time: this.record[0].preparation_time
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
  templateUrl: './tht-add-record-dialogue-templates/add-recipe-dialogue.html',
  styleUrls: ['./tht-add-record-dialogue.component.css'],
  providers: [DataManagementService]
})
export class DialogAddRecordDialog implements OnInit, OnChanges {
  public recipe_name:string;
  public preperation: string;
  public timeStamp:number;
  public ingredients: object;
  public category: string
  record: any[] = [ ];
  public inputCardTitle:string;
  public inputCardSubTitle:string;
  public controls: object;
  entity;
  data = [];
  // @ViewChild('nameInput') nameInput:ElementRef;

  onAddRecord(form: NgForm) {
    this.timeStamp = Date.now();
    // make timestamp human readable
    getChanges(this.controls, this.data);
    
    function getChanges(controls, data) {
      for(let i = 0; i < controls.length; i++) {
        if (controls[i].Value) {
          data.push(controls[i]);
        }
        console.log(data);
      }
    }
    
    this.record.push({
      recipe_name: this.data[0].Value,
      preperation: this.data[1].Value,
      date_created: this.timeStamp,
      ingredients: this.ingredients,
      preperation_time: this.data[2].Value,
      costs_per_person: this.data[3].Value,
      category: this.category
    });

    // clear form to allow for multiple adds per time
  }

  constructor(public dialogRef: MdDialogRef<DialogAddRecordDialog>, 
              private notificationService: NotificationService, 
              private dataManagementService: DataManagementService,
              @Inject(MD_DIALOG_DATA) public inputCardDefinition: any) {}
  
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }
  ngOnInit() {
    this.controls = this.inputCardDefinition.Controls;
    this.inputCardTitle = this.inputCardDefinition.CardTitle;
    this.inputCardSubTitle = this.inputCardDefinition.CardSubTitle;
  }
}