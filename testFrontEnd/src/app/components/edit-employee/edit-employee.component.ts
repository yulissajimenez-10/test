import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Employee, EmployeeDTO, MessageResponse } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/nombre-servicio.service';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
  employeeEditForm!: FormGroup; 
  messageResponse!:MessageResponse;
  customerEdit!: EmployeeDTO;
  idEmployee!:number;
  imageSrc!: string;

  @ViewChild('content') modalContent: any;
  
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    protected fb: FormBuilder,
    private activatedRoute: ActivatedRoute,  
    private modalService:NgbModal  
    ){
      this.idEmployee = this.activatedRoute.snapshot.params['id']; 
    } 

  ngOnInit(): void {
   this.createForm();
   this.employeeService.getEmployee(this.idEmployee).subscribe(
    data =>{  
    this.employeeEditForm.get("nombres")?.setValue(data.objectResponse[0].nombres);  
    this.employeeEditForm.get("apellido")?.setValue(data.objectResponse[0].apellido);  
    this.employeeEditForm.get("edad")?.setValue(data.objectResponse[0].edad);  
    this.employeeEditForm.get("fechaNacimiento")?.setValue(data.objectResponse[0].fechaNacimiento);  
    this.employeeEditForm.get("fechaIngreso")?.setValue(data.objectResponse[0].fechaIngreso);  
    this.employeeEditForm.get("fechaTerminoContrato")?.setValue(data.objectResponse[0].fechaTerminoContrato); 
    this.employeeEditForm.get("flgEstd")?.setValue(data.objectResponse[0].flgEstd); 
    //this.employeeEditForm.get("imagen")?.setValue(data.objectResponse[0].imagen); 
    this.imageSrc=data.objectResponse[0].imagen;
    
  }); 
  }

  createForm() {   
    this.employeeEditForm = this.fb.group({
      nombres: ["", [Validators.required, Validators.maxLength(30)]],
      apellido: ["", [Validators.required, Validators.maxLength(30)]],
      edad: ["", [Validators.required, Validators.maxLength(2),Validators.min(18)]],
      fechaNacimiento: ["", [Validators.required]],
      fechaIngreso: ["", [Validators.required]],
      fechaTerminoContrato: ["", [Validators.required]],
      flgEstd: ["", [Validators.required, Validators.maxLength(1)]],
      imagen: ["", [Validators.required, Validators.maxLength(1000)]], 
    });
  }
  
  
  onSubmit():void {
    if (this.employeeEditForm.valid) {      
      this.updateCustomer(); 
    } else {            
      this.openModal();
    } 
  }


updateCustomer() { 
  this.customerEdit = this.employeeEditForm.value; 
  this.employeeService.updateEmployee(this.idEmployee,this.customerEdit).subscribe(data => this.messageResponse = data);
  this.router.navigate(['/']);    
}


//metodo para abrir el modal
openModal() {  
  const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.title = 'Alerta';
    modalRef.componentInstance.message = 'Por favor, revisa bien los datos ingresados, hay campos invalidos.';
    modalRef.componentInstance.alertType = 'danger';
}

}


