package com.examly.springapp.repository;
import com.examly.springapp.model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserModel, Integer>{


}
