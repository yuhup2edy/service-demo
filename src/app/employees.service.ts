import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
//import {Observable} from 'rxjs/Rx';


import { IEmployees, IResponse } from './employees';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpE : HttpClient) { }
  private _urlE = "http://dummy.restapiexample.com/api/v1/employees";
  private _urlE1 = "http://dummy.restapiexample.com/api/v1/employee/2";
 
  getEmployees() : Observable<IResponse>
  {
     return this._httpE.get<IResponse>(this._urlE);
                
  }

  getEmployee() : Observable<IResponse>
  {
     return this._httpE.get<IResponse>(this._urlE1)
               // .pipe(catchErrror(this.errorHandler));
               .catch(this.errorHandler);
                     
  }

 errorHandler(error : HttpErrorResponse){
    
    return Observable.throw(error.message || "Server Error");

}

}
