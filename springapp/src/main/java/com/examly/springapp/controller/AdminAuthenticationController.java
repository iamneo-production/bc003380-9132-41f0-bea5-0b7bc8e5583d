package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.model.AdminModel;
import com.abacus.model.LoginModel;
import com.abacus.service.AdminService;


@CrossOrigin(origins = "http://localhost:3000")
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

