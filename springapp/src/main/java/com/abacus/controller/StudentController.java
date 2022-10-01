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

import com.abacus.model.StudentModel;
import com.abacus.service.StudentService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/student")
	public List<StudentModel> showStudent(){
		return studentService.getAllStudent();
	}
	
	@GetMapping("/student/{id}")
	public StudentModel showUser(@PathVariable int id)
	{
		return studentService.viewStudent(id);
	}
	
	@PostMapping("/student")
	public StudentModel addUser(@RequestBody StudentModel student)
	{
		return studentService.addStudent(student);
	}
	
	@PutMapping("/student/{id}")
	public ResponseEntity<StudentModel> updateUser(@RequestBody StudentModel student, @PathVariable int id)
	{
		studentService.editStudent(student, id);
		return new ResponseEntity<StudentModel>(student, HttpStatus.OK);
	}
	
	@DeleteMapping("/student/{id}")
	public String deleteStudent(@PathVariable int id)
	{
		return studentService.deleteStudent(id);
	}
	
 
}
