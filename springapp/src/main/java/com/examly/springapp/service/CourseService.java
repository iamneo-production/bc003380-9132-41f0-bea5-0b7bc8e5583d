package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepo;

@Service
public class CourseService {

	@Autowired
	private CourseRepo courseRepo;
	

	
	public List<CourseModel> getAllCourse()
	{
		
		return courseRepo.findAll();
	}
	
	public CourseModel getCourseById(int id)
	{
		return courseRepo.findById(id).orElse(null);
	}
	
	public String deleteCourse(int id)
	{
		courseRepo.deleteById(id);
		return "Course Deleted Successfully";
	}
	
	public CourseModel addCourse(CourseModel course)
	{
		return courseRepo.save(course);
	}
	
	public CourseModel updateCourse(CourseModel course, int id)
	{	
		CourseModel existingCourse = courseRepo.findById(id).orElse(null);
		existingCourse.setCourseId(course.getCourseId());
		existingCourse.setCourseName(course.getCourseName());
		existingCourse.setCourseDuration(course.getCourseDuration());
		existingCourse.setCourseDescription(course.getCourseDescription());
		
		
		return courseRepo.save(existingCourse);
	}

}

