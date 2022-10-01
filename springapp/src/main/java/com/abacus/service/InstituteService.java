package com.abacus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abacus.model.InstituteModel;
import com.abacus.repository.InstituteRepo ;

@Service
public class InstituteService {
	
	@Autowired
	private InstituteRepo instituteRepo ;
	
	
	public List<InstituteModel> getAllInstitute()
	{
		
		return instituteRepo.findAll();
	}
	
	public InstituteModel getInstituteById(int id)
	{
		return instituteRepo.findById(id).orElse(null);
	}
	
	public String deleteInstitute(int id)
	{
		//Room room = findById(id);
		instituteRepo.deleteById(id);
		return "Institute Deleted Successfully";
	}
	
	public InstituteModel addInstitute(InstituteModel institute)
	{
		return instituteRepo.save(institute);
	}
	
	public InstituteModel updateInstitute(InstituteModel institute, int id)
	{	
		InstituteModel existingInstitute = instituteRepo.findById(id).orElse(null);
		existingInstitute.setInstituteId((institute.getInstituteId()));
		existingInstitute.setInstituteName((institute.getInstituteName()));
		existingInstitute.setInstituteDescription(institute.getInstituteDescription());
		existingInstitute.setEmail(institute.getEmail());
		existingInstitute.setInstituteAddress(institute.getInstituteAddress());
		existingInstitute.setMobile(institute.getMobile());
		
		return instituteRepo.save(existingInstitute);
	}
	


}
