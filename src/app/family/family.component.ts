import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-family',
  template: `
    <p>
    <div *ngFor = "let f of family">
    <ul>
    <li> {{f.Last_Name}}
    </ul>
    </div>
    <p>
      {{family | json}}
    </p>
  `,
  styles: []
})
export class FamilyComponent implements OnInit {

  public family = [];

  constructor(private _familyservice : FamilyService) { }

  ngOnInit(): void {
    this._familyservice.getFamily()
        .subscribe(data => this.family = data);  
  }

}
