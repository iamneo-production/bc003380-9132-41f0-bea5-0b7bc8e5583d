package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.AdminModel;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.service.AdminService;


@CrossOrigin(origins = "*")
@RestController
public class AdminAuthenticationController 
{
	@Autowired
	private AdminService adminService;
	
	

	@PostMapping("/admin-basicauth")
	public AdminModel getAdminDataForValidation(@RequestBody LoginModel auth)
	{
		AdminModel credentialsMatched;
		credentialsMatched = adminService.authenticateAdmin(auth);
		return credentialsMatched;
	}
}

