import React from "react";
import { Component } from "react";
import moment from 'moment';

import StudentService from "../../../../api/services/StudentService";
import CourseService from "../../../../api/services/CourseService";
import InstituteService from "../../../../api/services/InstituteService";


class BookingsComponent extends Component 
{
    
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            rooms:[],
            ins:[],
            studentId: '',
            studentDOB: moment().format('YYYY-MM-DD'),
            address: '',
            mobile: '',
            age: '',
            courseModel :  null,
            instituteModel:null
            
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.bookRoomClicked = this.bookRoomClicked.bind(this);
    }

    async componentDidMount() {
        let courseModel = null
        StudentService.getStudentData(courseModel).then((res) => {
            this.setState({ bookings: res.data });
        });
        
        CourseService.getCourseData().then((res) => {
            this.setState({ rooms: res.data });
        });
        InstituteService.getInstituteData().then((res) => {
            this.setState({ ins: res.data });
        });
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    bookRoomClicked() {
        let booking = {
            studentId:500,
            studentName: this.state.studentName,
            studentDOB: this.state.studentDOB,
            address: this.state.address,
            mobile: this.state.mobile,
            age: this.state.age,
           courseModel:this.state.courseModel,    
            instituteModel:this.state.instituteModel
            
        }
        let room = {
            courseId: '',
        }
        let ins = {
            instituteId: '',
        }

        console.log("****************")
        console.log(booking)
        console.log(booking.courseModel)
        console.log(booking.instituteModel)

        console.log("************************************")

        StudentService.addStudent(booking)
            .then(res => {
                this.props.navigate("/admission");
            });
            CourseService.updateCourse(room,this.state.roomNo)
            .then(res => {
                this.props.navigate("/admission");
            });
            
    }

    render() 
    {
        return (
            <div>
                <div id="booking" className="section">
                    <div className="section-center">
                        <div className="container">
                            <div className="row">
                                <div className="booking-form">
                                    <h1 style={{color:"white"}}>Get yourself Enrolled in the courses</h1>
                                    <form>
                                        <div className="row">
               
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="studentName">Student-Name</span>
                                                    <input className="form-control" type="text"
                                                    name="studentName" onChange={this.handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                  <div className="form-group">
                                                    <span className="form-label" name="studentDOB">Student-DOB</span>
                                                    <input className="form-control" type="date" 
                                                    name="studentDOB"
                                                    onChange={this.handleChange}  required />
                                                    <div className="col-md-6">
                                                      
                                            </div>
	
                                        
                                                  
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
               
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="address">address</span>
                                                    <input className="form-control" type="text"
                                                    name="address" onChange={this.handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                  <div className="form-group">
                                                    <span className="form-label" name="mobile">mobile</span>
                                                    <input className="form-control" type="text" 
                                                    name="mobile"
                                                    onChange={this.handleChange}  required />
                                                    <div className="col-md-6">
                                                      
                                            </div>
                                           
                                                            
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <br/>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label" name="courseModel">Course Id</span>
                                                    <select className="form-control" name="courseModel" onChange={this.handleChange}>
                                                    {
                                                    this.state.rooms.map(
                                                        room =>
                                                        
                                                        <option style={{color:"white",backgroundColor:"green"}}>{room.courseId}</option>
                                                    
                                                        )
                                                    }
                                                    </select>
                                                    <span className="select-arrow" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label" name="instituteModel">Institute Id</span>
                                                    <select className="form-control" name="instituteModel" onChange={this.handleChange}>
                                                    {
                                                    this.state.ins.map(
                                                        inss =>
                                                        
                                                        <option style={{color:"white",backgroundColor:"green"}}>{inss.instituteId}</option>
                                                    
                                                        )
                                                    }
                                                    </select>
                                                    <span className="select-arrow" />
                                                </div>
                                            </div>
                                           
                                           
                                            <div className="col-md-3">
                                                <div className="form-btn">
                                                    <button className="submit-btn" onClick={this.bookRoomClicked}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingsComponent;