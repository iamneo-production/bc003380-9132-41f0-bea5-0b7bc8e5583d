package com.examly.springapp.repository;
import com.examly.springapp.model.InstituteModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InstituteRepo  extends JpaRepository<InstituteModel, Integer>{

}