package com.abacus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.model.StudentModel;
import com.abacus.repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepo studentRepo;
	
	
	public List<StudentModel> getAllStudent()
	{
		
		return studentRepo.findAll();
	}
	
	public StudentModel viewStudent(int id)
	{
		return studentRepo.findById(id).orElse(null);
	}
	
	public String deleteStudent(int id)
	{
		studentRepo.deleteById(id);
		return "Student Deleted Successfully";
	}
	
	public StudentModel addStudent(StudentModel student)
	{
		return studentRepo.save(student);
	}
	
	public StudentModel editStudent(StudentModel student, int id)
	{	
		StudentModel existingStudent = studentRepo.findById(id).orElse(null);
		existingStudent.setStudentId(student.getStudentId());
		existingStudent.setStudentDOB(student.getStudentDOB());
		existingStudent.setMobile(student.getMobile());
		existingStudent.setAge(student.getAge());
		existingStudent.setAddress(student.getAddress());

		
		
		return studentRepo.save(existingStudent);
	}

}
