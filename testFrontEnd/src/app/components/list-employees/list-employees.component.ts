import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeDTO, MessageResponse } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/nombre-servicio.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit{
  employees$!: Employee[];
  messageResponse!:MessageResponse;

  constructor(
    private employeeService: EmployeeService,
    protected fb: FormBuilder,    
    ){}  

  ngOnInit(): void {
    this.listAllEmployees();
  }

  listAllEmployees(){   
    this.employeeService.getAllEmployees().subscribe(data => this.employees$ = data);     
  }

  deleteEmployee(id:number){   
   this.employeeService.deleteEmployee(id).subscribe(data => this.messageResponse = data);   
   this.listAllEmployees();
  }
}  

