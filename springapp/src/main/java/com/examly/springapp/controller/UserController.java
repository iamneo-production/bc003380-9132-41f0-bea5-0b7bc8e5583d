package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public List<UserModel> showUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/users/{id}")
	public UserModel showUser(@PathVariable int id)
	{
		return userService.getUser(id);
	}
	
	@PostMapping("/users")
	public UserModel saveUser(@RequestBody UserModel user)
	{
		return userService.saveUser(user);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<UserModel> updateUser(@RequestBody UserModel user, @PathVariable int id)
	{
		userService.updateUser(user, id);
		return new ResponseEntity<UserModel>(user, HttpStatus.OK);
	}
	
	@DeleteMapping("/users/{id}")
	public String deleteUser(@PathVariable int id)
	{
		return userService.deleteUser(id);
	}
}

