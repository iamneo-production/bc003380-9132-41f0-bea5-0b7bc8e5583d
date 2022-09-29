package com.examly.springapp.repository;
import com.examly.springapp.model.CourseModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<CourseModel, Integer>{


}
