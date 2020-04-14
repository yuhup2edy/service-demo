import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { HttpClientModule } from '@angular/common/http';
import { FamilyService } from './family.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FamilyService,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
