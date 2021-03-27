package com.cognizant.springlearn;

import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;



import org.apache.commons.logging.LogFactory;
@SpringBootApplication
@ImportResource({"classpath:country.xml"})
public class SpringLearnApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(SpringLearnApplication.class, args);
		displayCountry();
		displayCountries();			
		
	}
	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("country");
		Country anotherCountry = context.getBean("country", Country.class);
		System.out.println("Handson1");
		System.out.println(country);
		System.out.println("Handson2");
		System.out.println(anotherCountry);
		
	}
	public static void displayCountries(){
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		
		@SuppressWarnings("unchecked")
		List<Country> lists=(List<Country>) context.getBean("countryList");
		System.out.println("Handson3");
		for(Country c:lists) {
			System.out.println(c);
			
		}
	}
	
	

}
