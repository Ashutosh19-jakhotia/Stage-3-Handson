package com.cognizant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@Autowired
	public Employee employee;
	@Autowired
	public Department department;
	@Autowired
	public List<Employee> employeeList;
	@Autowired
	public List<Department> dapartmentList;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeList;
	}
	@GetMapping("/dapartments")
	public List<Department> getAllDepartment() {
		return dapartmentList;
	}
	

}
