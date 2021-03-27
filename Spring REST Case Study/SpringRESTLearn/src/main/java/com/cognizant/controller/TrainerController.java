package com.cognizant.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.model.Trainer;
import com.cognizant.service.TrainerService;

@RestController
public class TrainerController {
	
	@Autowired
	private TrainerService trainerService;
	
	@PostMapping(value="/trainerSignUp",consumes= MediaType.APPLICATION_JSON_VALUE,produces= MediaType.APPLICATION_JSON_VALUE)
	public int addTrainer(@RequestBody Trainer trainer) {
		return trainerService.trainerSignUp(trainer);
	}
	
	@RequestMapping(value="/trainerUpdate",method = RequestMethod.PUT)
	public int updateTrainer(@RequestBody  Trainer trainer) {
		
		return trainerService.trainerUpdate(trainer);
	}
	

}
