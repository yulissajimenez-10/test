package com.test.test.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.test.dto.EmployeeDTO;
import com.test.test.service.EmployeeService;
import com.test.test.utils.CsbResponse;

import jakarta.validation.Valid;


@RequestMapping("/rest/api/employee")
@CrossOrigin("*")
@RestController
public class EmployeeRestController {
	
	@Autowired	
	private EmployeeService employeeService;
	
	@GetMapping
	public CsbResponse getAllEmployees(){
		CsbResponse csbResponse = employeeService.getAllEmployees();
		return csbResponse;
	}
	
	@GetMapping(value = "/{id}")
	public CsbResponse findEmployee(@PathVariable("id") int id){		
		CsbResponse csbResponse  = employeeService.finEmployee(id);
		return csbResponse;
	}
	
	@PostMapping
	public CsbResponse saveEmployee(@RequestBody EmployeeDTO employeeDTO){
		CsbResponse csbResponse  = employeeService.save(employeeDTO);
		return csbResponse;
	}

	@DeleteMapping(value = "/{id}")
	public CsbResponse deleteEmployee( @PathVariable("id") int id){
		CsbResponse csbResponse = employeeService.delete(id);
		return csbResponse ;
	}

	@PutMapping("/{id}")
	public CsbResponse updateEmployee(@Valid @RequestBody EmployeeDTO employeeDTO , @PathVariable("id") int id){
		CsbResponse csbResponse = employeeService.updateEmployee(employeeDTO, id);
		return csbResponse ;
	}

}
