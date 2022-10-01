package com.abacus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abacus.model.InstituteModel;

public interface InstituteRepo  extends JpaRepository<InstituteModel, Integer>{

}
