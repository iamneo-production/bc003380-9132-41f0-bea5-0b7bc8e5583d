package com.examly.springapp.controller;

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

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.model.InstituteModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.service.CourseService;
import com.examly.springapp.service.InstituteService;
import com.examly.springapp.service.StudentService;

@CrossOrigin(origins = "*")
@RestController
public class AdminController 
{
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private InstituteService instituteService;
	
	@GetMapping("/viewAllInstitute")
	public List<InstituteModel> viewAllInstitute(){
		return instituteService.getAllInstitute();
	}
	
	@GetMapping("/viewInstitute/{id}")
	public InstituteModel viewInstitute(@PathVariable int id)
	{
		return instituteService.getInstituteById(id);
	}
	
	@PostMapping("/addInstitute")
	public InstituteModel addInstitute(@RequestBody InstituteModel institute)
	{
		return instituteService.addInstitute(institute);
	}
	
	@PutMapping("/editInstitute/{id}")
	public ResponseEntity<InstituteModel> editInstitute(@RequestBody InstituteModel institute, @PathVariable int id)
	{
		instituteService.updateInstitute(institute, id);
		return new ResponseEntity<InstituteModel>(institute, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteInstitute/{id}")
	public String deleteInstitute(@PathVariable int id)
	{
		return instituteService.deleteInstitute(id);
	}
	
	@PostMapping("/addstudent")
	public StudentModel addStudent(@RequestBody StudentModel student)
	{
		return studentService.addStudent(student);
	}
	@GetMapping("/viewstudent/{id}")
	public StudentModel viewStudent(@PathVariable int id)
	{
		return studentService.viewStudent(id);
	}
	@PutMapping("/editStudent/{id}")
	public ResponseEntity<StudentModel> editStudent(@RequestBody StudentModel student, @PathVariable int id)
	{
		studentService.editStudent(student, id);
		return new ResponseEntity<StudentModel>(student, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable int id)
	{
		return studentService.deleteStudent(id);
	}
	

	
	@GetMapping("/viewAllCourse")
	public List<CourseModel> viewAllCourse(){
		return courseService.getAllCourse();
	}
	
	@GetMapping("/viweCourse/{id}")
	public CourseModel viweCourse(@PathVariable int id)
	{
		return courseService.getCourseById(id);
	}
	
	@PostMapping("/addCourse")
	public CourseModel addCourse(@RequestBody CourseModel course)
	{
		return courseService.addCourse(course);
	}
	
	@PutMapping("/editCourse/{id}")
	public ResponseEntity<CourseModel> editCourse(@RequestBody CourseModel course, @PathVariable int id)
	{
		courseService.updateCourse(course, id);
		return new ResponseEntity<CourseModel>(course, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteCourse/{id}")
	public String deleteCourse(@PathVariable int id)
	{
		return courseService.deleteCourse(id);
	}
	
}
