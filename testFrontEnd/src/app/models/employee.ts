export interface EmployeeDTO {   
  nombres: string;
  apellido: string;
  edad: number;
  fechaNacimiento: string | null;
  fechaIngreso: string | null;
  fechaTerminoContrato: string | null;
  flgEstd: string;
  imagen: string;
    
  }

  export interface MessageResponse {
    messagesResponse: string;
    codeResponse: string;
    description: string | null;
    objectResponse: Employee[];
  }
  
  export interface Employee {
    idEmpleado: number;
    nombres: string;
    apellido: string;
    edad: number;
    fechaNacimiento: string | null;
    fechaIngreso: string | null;
    fechaTerminoContrato: string | null;
    flgEstd: string;
    imagen: string;
  }