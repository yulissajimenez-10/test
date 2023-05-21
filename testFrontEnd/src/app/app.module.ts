import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';


@NgModule({
  declarations: [
    AppComponent,    
    ListEmployeesComponent, NewEmployeeComponent, EditEmployeeComponent, AlertModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
