import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFamily } from './family';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private _url: string = "assets/data/family.json";
  constructor(private _http: HttpClient) { }

  getFamily() : Observable<IFamily[]>
  {
    return this._http.get<IFamily[]>(this._url);
  }
}
