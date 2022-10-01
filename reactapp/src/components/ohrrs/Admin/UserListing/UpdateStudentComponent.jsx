import React, { Component } from "react";
import moment from 'moment';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import StudentService from "../../../../api/services/StudentService";

class UpdateStudentComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            studentId: this.props.params.studentId,
            studentName : '', 
            studentDOB : moment().format('YYYY-MM-DD'),
            address : '',
            mobile : '',
            age : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
   

    validate(values)
    {
        let errors = {}

        

        if(!values.studentName){
            errors.studentName = 'Please enter the student Name '
        } else if (values.studentName.length < 3) {
            errors.studentName = 'Please enter atleast 3 characters  studentName'
        }

        if(!values.studentDOB){
            errors.studentDOB = 'Please enter the studentDOB'
        }

        if(!values.age)
        {
            errors.age = 'Please enter the age'
        }
       

        if(!values.address){
            errors.address = 'Please enter the  address'
        } 
        
        if(!values.mobile){
            errors.mobile = 'Please enter the  mobile'
        } 

        return errors;
    }

    componentDidMount()
    {
        console.log(StudentService.getSpecificStudentData(this.state.studentId))
        StudentService.getSpecificStudentData(this.state.studentId)
            .then(response => this.setState({
                studentName: response.data.studentName,
                studentDOB: response.data.studentDOB,
                address: response.data.address,
                mobile: response.data.mobile,
                age: response.data.age
            }))
    }
   

    handleChange(event) {
        console.log(event.target.studentName)
        this.setState({ [event.target.studentName]: event.target.value })
    }

    onSubmit(values)
    {
        if(this.state.studentId === -1)
        {
            StudentService.addStudent({
                studentId: this.state.studentId,
                studentName: values.studentName,
                studentDOB: values.studentDOB,
                address: values.address,
                mobile: values.mobile,
                age: values.age
            })
            .then(
                () => this.props.navigate('/admin-Student')
            )
        }
        
        else
        {
            StudentService.addStudent({
                studentId: this.state.studentId,
                studentName: values.studentName,
                studentDOB: values.studentDOB,
                address: values.address,
                mobile: values.mobile,
                age: values.age
            })
            .then(
                () => this.props.navigate('/admin-Student')
            )
        }
    }

    render()
    {
        let { studentName, studentDOB, address, mobile,age } = this.state

        return (
            <div className="updateUserInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div className="container">
                            <div className="masthead-subheading">Users information of - {this.props.params.studentId}</div>
                <br/>
                </div>
                <div className="container border border-warning">
                    <Formik 
                        initialValues = {{studentName, studentDOB, address, mobile,age  }} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                          
                                        <ErrorMessage name="studentName" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="studentDOB" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="address" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="mobile" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="age" component="div" className="alert alert-warning" />
                                        
                                        
                                        <fieldset className="form-group">
                                            <label>Student Name</label>
                                            <Field className="form-control" type="text" name="studentName" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>studentDOB</label>
                                            <Field className="form-control" type="date" name="studentDOB" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>address </label>
                                            <Field className="form-control" type="text" name="address" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>mobile </label>
                                            <Field className="form-control" type="text" name="mobile" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>age </label>
                                            <Field className="form-control" type="number" name="age" />
                                        </fieldset>
                                        
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>

        );
    }
}

export default UpdateStudentComponent;