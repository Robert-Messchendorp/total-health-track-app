import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../../services/data.service';
import { DataManagementService } from '../../../services/data-management.service';

@Component({
  selector: 'tht-playground',
  templateUrl: './tht-playground.component.html',
  styleUrls: ['./tht-playground.component.css'],
  providers: [DataManagementService, DataService]
})
export class ThtPlaygroundComponent implements OnInit {
  controls;
  entity = 'recipes';
  constructor(private dataManagementService: DataManagementService, private dataService: DataService) {

   }


  ngOnInit() {
    // this.dataManagementService.getControlsByEntity(this.entity); 
  //   this.dataService.onRead('someurl')
  //   .subscribe(
  //     (response: Response) => {
  //       this.controls = response.json();
  //     },
  //     (error) => console.log(error)
  //   );
  //   console.log(this.controls);
  }

}
