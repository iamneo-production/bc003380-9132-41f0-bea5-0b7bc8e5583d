package com.abacus.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.model.InstituteModel;
import com.abacus.service.InstituteService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class InstituteController {
	@Autowired
	private InstituteService instituteService;
	
	@GetMapping("/institute")
	public List<InstituteModel> showAllInstitute(){
		return instituteService.getAllInstitute();
	}
	
	@GetMapping("/institute/{id}")
	public InstituteModel showInstitute(@PathVariable int id)
	{
		return instituteService.getInstituteById(id);
	}
	
	@PostMapping("/institute")
	public InstituteModel addInstitute(@RequestBody InstituteModel institute)
	{
		return instituteService.addInstitute(institute);
	}
	
	@PutMapping("/institute/{id}")
	public ResponseEntity<InstituteModel> updateInstitute(@RequestBody InstituteModel institute, @PathVariable int id)
	{
		instituteService.updateInstitute(institute, id);
		return new ResponseEntity<InstituteModel>(institute, HttpStatus.OK);
	}
	
	@DeleteMapping("/institute/{id}")
	public String deleteInstitute(@PathVariable int id)
	{
		return instituteService.deleteInstitute(id);
	}
	
}
