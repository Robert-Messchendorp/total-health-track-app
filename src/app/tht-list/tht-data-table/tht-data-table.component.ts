import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

// Data table specific imports
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

// Model & Services
import { Recipe } from '../../../models/recipe.model';
import { Notification } from '../../../models/notification.model';

import { NotificationService } from '../../../services/notification.service';
import { RecipeService } from '../../../services/feature services/recipe.service';
import { DataService } from '../../../services/data.service';



@Component({
  selector: 'tht-data-table',
  templateUrl: './tht-data-table.component.html',
  styleUrls: ['./tht-data-table.component.css']
})
export class ThtDataTableComponent implements OnInit, AfterViewInit, OnChanges {
  
    displayedColumns = ['recipeName', 'userName', 'CostsPP', 'Category'];
    dataSource: ExampleDataSource | null;
    exampleDatabase;
    result;
    records;
    record;
    success: Notification;
    url: string;
    @Output() recordSelected = new EventEmitter<{}>();

    constructor (private recipeService: RecipeService, private dataService: DataService, private notificationService: NotificationService) {
      // this.records = recipeService.getRecipes();
      // console.log(this.records);
     }
  
    ngOnInit() {
      // Set timeout below is implemented as a workaround for a Angular Material Datatable issue of listening to two changes before showing
      setTimeout(() =>  {

      })
      this.exampleDatabase = new ExampleDatabase(this.dataService, this.notificationService);
    
      this.dataSource = new ExampleDataSource(this.exampleDatabase);

    }

    ngAfterViewInit() {
      // this.dataSource = new ExampleDataSource(this.exampleDatabase);
      
    }

    ngOnChanges(changes: SimpleChanges) {
      
    }
  
    callToDetail(record: object) {
      this.record = record;
      this.recordSelected.emit(this.record);
      // when the detail component and data via service can be loaded you can search in the recipes with recipe name or maybe I can use 
      // the id of the record in a hidden column
    }
  }

  
  
  /** Constants used to fill up our data base. */
  const CATEGORY = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
  

  export interface UserData {
    recipename: string;
    name: string;
    costs: string;
    category: string;
  }
  
  /** An example database that the data source uses to retrieve data for the table. */
  export class ExampleDatabase implements OnInit, OnChanges {
    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
    get data(): UserData[] { return this.dataChange.value; }
    url: string;
    result;
    records;
    success: Notification;
    names = [];
    recipeNames = [];
    tablefilling = [];
  
    constructor(private dataService:DataService, private notificationService: NotificationService) {
      this.getData();

      this.notificationService.successNotificationTriggered
      .subscribe(
        (success: Notification) => {
          this.success = success;
          if (this.success.record) {
            this.addUser(this.success.record);
          }
        })
    }

    getData() {
      this.url = 'http://localhost:3000/recipes';
      this.dataService.onRead(this.url)
        .subscribe(
          (response: Response) => {
            this.result = response;
            this.records = this.result.record;
            for (let i = 0; i < this.records.length; i++) { 
              // this.addUser(this.records); 
              this.names.push(this.records[i].username);
              this.recipeNames.push(this.records[i].recipe_name);
              this.tablefilling.push(this.createNewUser(this.names[i], this.recipeNames[i]));
            }
            this.dataChange.next(this.tablefilling);
          },
          (error) => console.log(error)
        );
    }

    ngOnInit() {
      
    }

    ngOnChanges() {
      
    }
  
    /** Adds a new user to the database. */
    addUser(record) {
      const recordData: any = [];
      const copiedData: UserData[] = this.dataChange.value;
      recordData.push(this.createNewUser(record.username, record.recipe_name));
      
      copiedData.push(recordData[0]);
      this.dataChange.next(copiedData);
    }

    /** Builds and returns a new User. */
    private createNewUser(usernames, recipenames) {
      const name = usernames;
  
      const recipename = recipenames;
  
      return {
        recipename: recipename,
        name: name,
        costs: Math.round(Math.random() * 100).toString(),
        category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))]
      };
    }
  }
  
  /**
   * Data source to provide what data should be rendered in the table. Note that the data source
   * can retrieve its data in any way. In this case, the data source is provided a reference
   * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
   * the underlying data. Instead, it only needs to take the data and send the table exactly what
   * should be rendered.
   */
  export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<UserData[]> {
      return this._exampleDatabase.dataChange;
    }
  
    disconnect() {}
  
  }
