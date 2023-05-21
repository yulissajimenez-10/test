package com.test.test.utils;
import org.mapstruct.Mapper;


import com.test.test.dto.EmployeeDTO;
import com.test.test.model.Employee;

@Mapper(componentModel = "spring")
public interface EmployeeMapper {	
	Employee mapeoEmployeeDTOToEmployee(EmployeeDTO employeeDTO);
	
    EmployeeDTO mapeoEmployeeToEmployeeDTO(Employee employee);
}
