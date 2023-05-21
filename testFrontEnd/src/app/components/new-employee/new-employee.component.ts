import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDTO, MessageResponse } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/nombre-servicio.service';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { NgxImageCompressService } from 'ngx-image-compress';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit { 
  employeeRegisterForm!: FormGroup;  
  employeeDTO!:EmployeeDTO; 
  messageResponse!:MessageResponse;
  
  @ViewChild('content') modalContent: any;
  //base64Image!:string;
  
  
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    protected fb: FormBuilder,    
    private modalService: NgbModal,       
    ){} 


  ngOnInit(): void {
    this.createForm();
  }

  onSubmit():void {
    if (this.employeeRegisterForm.valid) {
      this.registerCustomer();        
    } else {
      this.openModal();
    }
  }    

registerCustomer() {   
    this.employeeDTO = this.employeeRegisterForm.value;    
    //this.employeeDTO.imagen = this.base64Image;
    this.employeeService.saveEmployee(this.employeeDTO).subscribe(data => this.messageResponse = data);  
    this.router.navigate(['/']);
}

createForm() {   
    this.employeeRegisterForm = this.fb.group({
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
  

openModal() { 
  const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.title = 'Alerta';
    modalRef.componentInstance.message = 'Por favor, revisa bien los datos ingresados, hay campos invalidos.';
    modalRef.componentInstance.alertType = 'danger';
}  

//convertir imagen a base 64
/*
handleFileInput(event: any) { 
  const file = event.target.files[0];  
  const reader = new FileReader();
  reader.onload = () => {
     this.base64Image = reader.result as string;
  };
  reader.readAsDataURL(file);
}*/

}


