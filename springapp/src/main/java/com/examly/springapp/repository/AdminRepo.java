package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.AdminModel;

public interface AdminRepo extends JpaRepository<AdminModel, Integer>{

}
