package com.cognizant;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
@ImportResource({"classpath:employee.xml"})
public class SpringRest2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringRest2Application.class, args);
		displayAllEmployee();		
	}

	private static void displayAllEmployee() {
		ApplicationContext context = new ClassPathXmlApplicationContext("employee.xml");

		@SuppressWarnings("unchecked")
		List<Employee> lists = (List<Employee>) context.getBean("employeeList");
		System.out.println("List Of employees");
		for (Employee e : lists) {
			System.out.println(e);
		}
		
	}

}
