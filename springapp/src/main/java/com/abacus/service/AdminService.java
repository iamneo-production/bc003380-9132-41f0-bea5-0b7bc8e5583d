package com.abacus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abacus.model.AdminModel;
import com.abacus.model.LoginModel;
import com.abacus.repository.AdminRepo;


@Service
public class AdminService {
	
	@Autowired
	private AdminRepo adminRepo;
	
	public String deleteAdmin(int id)
	{
		//Room room = findById(id);
		adminRepo.deleteById(id);
		return "Admin Deleted Successfully";
	}
	
	public AdminModel saveAdmin(AdminModel admin)
	{
		return adminRepo.save(admin);
	}
	
	public AdminModel updateAdmin(AdminModel admin, int id)
	{	
		AdminModel existingAdmin = adminRepo.findById(id).orElse(null);
		existingAdmin.setMobileNumber(admin.getMobileNumber());
		existingAdmin.setEmail(admin.getEmail());
		existingAdmin.setPassword(admin.getPassword());
		
		return adminRepo.save(existingAdmin);
	}
	
	public List<AdminModel> getAllAdmins(){
		return adminRepo.findAll();
	}
	
	public AdminModel getAdmin(int id) {
		return adminRepo.findById(id).get();
	}

	
	public AdminModel authenticateAdmin(LoginModel auth)
	{
		List<AdminModel> list = adminRepo.findAll();
		for(AdminModel admin: list)
		{
			if(admin.getEmail().equalsIgnoreCase(auth.getEmail()) && admin.getPassword().equalsIgnoreCase(auth.getPassword()))
			{
				return admin;
			}
		}
		return null;
	}
}
