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
import com.examly.springapp.service.CourseService;



@RestController
@CrossOrigin(origins = "*")
public class CourseController {
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/course")
	public List<CourseModel> showCourse(){
		return courseService.getAllCourse();
	}
	
	@GetMapping("/course/{id}")
	public CourseModel showCourse(@PathVariable int id)
	{
		return courseService.getCourseById(id);
	}
	
	@PostMapping("/course")
	public CourseModel addCourse(@RequestBody CourseModel course)
	{
		return courseService.addCourse(course);
	}
	
	@PutMapping("/course/{id}")
	public ResponseEntity<CourseModel> updateCourse(@RequestBody CourseModel course, @PathVariable int id)
	{
		courseService.updateCourse(course, id);
		return new ResponseEntity<CourseModel>(course, HttpStatus.OK);
	}
	
	@DeleteMapping("/course/{id}")
	public String deleteCourse(@PathVariable int id)
	{
		return courseService.deleteCourse(id);
	}

}
