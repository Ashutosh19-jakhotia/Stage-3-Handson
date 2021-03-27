package com.cognizant;

import com.fasterxml.jackson.annotation.JsonValue;

public class Employee {
	
	private String name;
	private String address;
	//@JsonValue
	private Department department;

	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(String name, String address, Department department) {
		super();
		this.name = name;
		this.address = address;
		this.department = department;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "name=" + name + ", address=" + address + ", department=" + department ;
	}

}
