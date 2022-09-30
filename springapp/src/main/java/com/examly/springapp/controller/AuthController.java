package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.AdminService;
import com.examly.springapp.service.UserService;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

	@Autowired
	private UserService userService;

	@Autowired
	private AdminService adminService;
	
	
	@PostMapping("/basicauth")
	public UserModel getUserDataForValidation(@RequestBody LoginModel auth)
	{
		UserModel credentialsMatched;
		credentialsMatched = userService.isUserPresent(auth);
		return credentialsMatched;
	}
	

}
