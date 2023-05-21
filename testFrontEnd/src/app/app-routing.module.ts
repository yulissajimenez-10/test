import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
//import { ErrorModalComponent } from './components/error-modal/error-modal.component';

const routes: Routes = [    
    { path: '', component: ListEmployeesComponent },
    { path: 'edit/employee/:id', component: EditEmployeeComponent },
    { path: 'register/employee', component: NewEmployeeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


