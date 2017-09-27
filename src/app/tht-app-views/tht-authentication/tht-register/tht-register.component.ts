import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'tht-register',
  templateUrl: './tht-register.component.html',
  styleUrls: ['./tht-register.component.css']
})
export class ThtRegisterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    const url = 'http://localhost:3000/users';
    this.dataService.onCreate(form.value, url)
     .subscribe(
       data => console.log(data)
     );
    form.resetForm();
  }

}
