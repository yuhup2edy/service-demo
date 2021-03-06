import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  template: `
    <p>
    <h3> {{errorMsg}} </h3>
    <div *ngFor = "let e of employees">
    <ul>
    <li> {{e.employee_salary}}
    </ul>
    </div>
    <p>
      {{employees | json}}
    </p>
    <p>
      {{employee1 | json}}
    </p>
  `,
  styles: []
})
export class EmployeesComponent implements OnInit {

  public employees = [];

  public employee1 = [];

  public errorMsg;
  
  constructor(private _employeesservice : EmployeesService) { }

  ngOnInit(): void {

    this._employeesservice.getEmployees() 
    .subscribe(data => this.employees = data.data,
              error => this.errorMsg = error);
    //this.employees.


    this._employeesservice.getEmployee()
    .subscribe(data => this.employee1 = data.data,
               error => this.errorMsg = error);
    
  }

}
