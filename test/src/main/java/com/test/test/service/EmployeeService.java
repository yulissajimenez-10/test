package com.test.test.service;


import com.test.test.dto.EmployeeDTO;
import com.test.test.utils.CsbResponse;

public interface EmployeeService {
	CsbResponse save(EmployeeDTO employeeDTO);
	CsbResponse finEmployee(int id);
    CsbResponse getAllEmployees();
	CsbResponse delete(int id);
	CsbResponse updateEmployee(EmployeeDTO employeeDTO, int id);
}
