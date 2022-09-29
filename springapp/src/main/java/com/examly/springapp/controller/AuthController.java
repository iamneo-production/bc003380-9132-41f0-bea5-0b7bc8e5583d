package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.model.AdminModel;
import com.abacus.model.LoginModel;
import com.abacus.model.UserModel;
import com.abacus.service.AdminService;
import com.abacus.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
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
