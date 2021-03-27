package com.cognizant;

public class Department {
	
	private String deptName;
	public Department() {
		// TODO Auto-generated constructor stub
	}
	public Department(String deptName) {
		super();
		this.deptName = deptName;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	@Override
	public String toString() {
		return "deptName=" + deptName;
	}
	 

}
