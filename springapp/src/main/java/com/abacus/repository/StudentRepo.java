package com.abacus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abacus.model.StudentModel;

public interface StudentRepo  extends JpaRepository<StudentModel, Integer>{

}
