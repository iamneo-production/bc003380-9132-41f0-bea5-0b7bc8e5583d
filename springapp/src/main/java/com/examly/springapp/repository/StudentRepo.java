package com.examly.springapp.repository;
import com.examly.springapp.model.StudentModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo  extends JpaRepository<StudentModel, Integer>{

}