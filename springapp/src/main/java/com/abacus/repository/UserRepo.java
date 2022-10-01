package com.abacus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abacus.model.UserModel;

public interface UserRepo extends JpaRepository<UserModel, Integer>{

}
