package com.abacus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abacus.model.AdminModel;

public interface AdminRepo extends JpaRepository<AdminModel, Integer>{

}
