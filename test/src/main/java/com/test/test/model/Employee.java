package com.test.test.model;


import java.util.Date;



import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


@Table(name = "tb_empleado")
@Entity
public class Employee {	
	
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Id	
	 @Column(name = "id_empleado",length = 20)
	 private int idEmpleado;
	 
	 @NotNull	
	 @Column(name = "nombres", nullable = false,length = 30)
	 private String nombres;
	 
	 @NotNull
	 @Size(max = 30)
	 @Column(name = "apellido",nullable = false,length = 30)
	 private String apellido;
	 
	 @NotNull	
	 @Column(name = "edad",nullable = false,length = 2)
	 private int edad;
	 
	 @Temporal(TemporalType.DATE)
	 @Nullable
	 @Column(name = "fecha_nacimiento")
	 private Date fechaNacimiento;
	 
	 @Temporal(TemporalType.DATE)
	 @Nullable
	 @Column(name = "fecha_ingreso")
	 private Date fechaIngreso;
	 
	 @Temporal(TemporalType.DATE)
	 @Nullable
	 @Column(name = "fecha_termino_contrato")
	 private Date fechaTerminoContrato;
	 
	
	 @Nullable
	 @Column(name = "flg_estd",length = 1)	
	 private char flgEstd;
	 
	 @Nullable
	 @Column(name = "imagen",length = 1000)	
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

	public char getFlgEstd() {
		return flgEstd;
	}

	public void setFlgEstd(char flgEstd) {
		this.flgEstd = flgEstd;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	} 
	 
	 
	
	 
	

}


