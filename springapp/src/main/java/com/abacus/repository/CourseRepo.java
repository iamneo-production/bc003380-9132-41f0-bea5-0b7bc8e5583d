package com.abacus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abacus.model.CourseModel;

public interface CourseRepo extends JpaRepository<CourseModel, Integer>{


}
