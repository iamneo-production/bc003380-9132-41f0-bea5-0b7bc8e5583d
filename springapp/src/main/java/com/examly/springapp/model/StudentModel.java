package com.examly.springapp.model;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;




@Entity
public class StudentModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	private String studentName;
	@Temporal(TemporalType.DATE)
	private Date studentDOB;
	private String address;
	private String mobile;
	


	private int age;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "courseId", referencedColumnName = "courseId")
	private CourseModel courseModel;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "instituteId", referencedColumnName = "instituteId")
	private InstituteModel instituteModel;
	


	public StudentModel(int studentId, String studentName, Date studentDOB, String address, String mobile, int age,
			CourseModel courseModel, InstituteModel instituteModel) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.age = age;
		this.courseModel = courseModel;
		this.instituteModel = instituteModel;
	}


	public StudentModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public Date getStudentDOB() {
		return studentDOB;
	}
	public void setStudentDOB(Date studentDOB) {
		this.studentDOB = studentDOB;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

	public CourseModel getCourseModel() {
		return courseModel;
	}


	public void setCourseModel(CourseModel courseModel) {
		this.courseModel = courseModel;
	}


	public InstituteModel getInstituteModel() {
		return instituteModel;
	}


	public void setInstituteModel(InstituteModel instituteModel) {
		this.instituteModel = instituteModel;
	}


	

	@Override
	public String toString() {
		return "StudentModel [studentId=" + studentId + ", studentName=" + studentName + ", studentDOB=" + studentDOB
				+ ", address=" + address + ", mobile=" + mobile + ", age=" + age + "]";
	}
	




}
