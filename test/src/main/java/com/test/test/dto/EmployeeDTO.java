package com.test.test.dto;

import java.util.Date;


public class EmployeeDTO {

	 private int idEmpleado;	
	 private String nombres; 	
	 private String apellido; 	
	 private int edad;	 	 
	 private Date fechaNacimiento;	 	
	 private Date fechaIngreso;	 	 
	 private Date fechaTerminoContrato;	 	
	 private char flgEstd;	
	 private String imagen;
	 
	 
	 
	public int getIdEmpleado() {
		return idEmpleado;
	}
	public void setIdEmpleado(int idEmpleado) {
		this.idEmpleado = idEmpleado;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public Date getFechaIngreso() {
		return fechaIngreso;
	}
	public void setFechaIngreso(Date fechaIngreso) {
		this.fechaIngreso = fechaIngreso;
	}
	public Date getFechaTerminoContrato() {
		return fechaTerminoContrato;
	}
	public void setFechaTerminoContrato(Date fechaTerminoContrato) {
		this.fechaTerminoContrato = fechaTerminoContrato;
	}	
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public char getFlgEstd() {
		return flgEstd;
	}
	public void setFlgEstd(char flgEstd) {
		this.flgEstd = flgEstd;
	} 
	 

	 
	 
	 
}



