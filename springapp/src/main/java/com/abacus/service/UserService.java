package com.abacus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abacus.model.LoginModel;
import com.abacus.model.UserModel;
import com.abacus.repository.UserRepo;


@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public String deleteUser(int id)
	{
		//Room room = findById(id);
		userRepo.deleteById(id);
		return "User Deleted Successfully";
	}
	
	public UserModel saveUser(UserModel user)
	{
		return userRepo.save(user);
	}
	
	public UserModel updateUser(UserModel user, int id)
	{	
		UserModel existingUser = userRepo.findById(id).orElse(null);
		existingUser.setUsername(user.getUsername());
		existingUser.setEmail(user.getEmail());
		existingUser.setPassword(user.getPassword());
		existingUser.setMobileNumber(user.getMobileNumber());
		
		return userRepo.save(existingUser);
	}
	
	public List<UserModel> getAllUsers(){
		return userRepo.findAll();
	}
	
	public UserModel getUser(int id) {
		return userRepo.findById(id).get();
	}
	
	public UserModel isUserPresent(LoginModel auth)
	{
		List<UserModel> list = userRepo.findAll();
		for(UserModel user: list)
		{
			if(user.getEmail().equalsIgnoreCase(auth.getEmail()) && user.getPassword().equalsIgnoreCase(auth.getPassword()))
			{
				return user;
			}
		}
		return null;
	}
	
}
