import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployees, IResponse } from './employees';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpE : HttpClient) { }
  private _urlE = "http://dummy.restapiexample.com/api/v1/employees";
  private _urlE1 = "http://dummy.restapiexample.com/api/v1/employee/1";
 
  getEmployees() : Observable<IResponse>
  {
     return this._httpE.get<IResponse>(this._urlE);
  }

  getEmployee() : Observable<IResponse>
  {
     return this._httpE.get<IResponse>(this._urlE1);
  }

}
