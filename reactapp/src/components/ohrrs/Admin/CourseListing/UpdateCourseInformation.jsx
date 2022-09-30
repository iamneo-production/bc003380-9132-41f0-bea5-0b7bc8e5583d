import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import CourseService from "../../../../api/services/CourseService";

class UpdateCourseInformation extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            courseId: this.props.params.courseId,
            courseName : '', 
            courseDescription : '',
            courseDuration : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(values)
    {
        let errors = {}

        if(!values.courseName){
            errors.courseName = 'Please enter the Name '
        } else if (values.courseName.length < 3) {
            errors.courseName = 'Please enter atleast 3 characters  Name'
        }

        if(!values.courseDescription){
            errors.courseDescription = 'Please enter the CourseDescription '
        }

        if(!values.courseDuration)
        {
            errors.courseDuration = 'Please enter the courseDuration'
        } else if(values.courseDuration.length  < 1) {
            errors.courseDuration = 'Please enter atleast 1 characters courseDuration'
        }

        return errors;
    }

    componentDidMount()
    {
        console.log(CourseService.getSpecificCourseData(this.state.courseId))
        CourseService.getSpecificCourseData(this.state.courseId)
            .then(response => this.setState({
                courseName: response.data.courseName,
                courseDescription: response.data.courseDescription,
                courseDuration: response.data.courseDuration,
            }))
    }

    handleChange(event) {
        console.log(event.target.courseName)
        this.setState({ [event.target.courseName]: event.target.value })
    }

    onSubmit(values)
    {
        if(this.state.courseId === -1)
        {
            CourseService.addCourse({
                courseId: this.state.courseId,
                courseName: values.courseName,
                courseDescription: values.courseDescription,
                courseDuration: values.courseDuration,
            })
            .then(
                () => this.props.navigate('/admin-Course')
            )
        }
        else
        {
            CourseService.addCourse({
                courseId: this.state.courseId,
                courseName: values.courseName,
                courseDescription: values.courseDescription,
                courseDuration: values.courseDuration,
                
            })
            .then(
                () => this.props.navigate('/admin-Course')
            )
        }
    }

    render()
    {
        let { courseName, courseDescription, courseDuration } = this.state

        return (
            <div className="updateUserInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div className="container">
                            <div className="masthead-subheading">Users information of - {this.props.params.courseId}</div>
                <br/>
                </div>
                <div className="container border border-warning">
                    <Formik 
                        initialValues = {{  courseName, courseDescription, courseDuration }} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                                        <ErrorMessage name="courseName" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="courseDescription" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="courseDuration" component="div" className="alert alert-warning" />
                                    
                                        <fieldset className="form-group">
                                            <label>Course Name</label>
                                            <Field className="form-control" type="text" name="courseName" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Course Description</label>
                                            <Field className="form-control" type="text" name="courseDescription" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Course Duration</label>
                                            <Field className="form-control" type="text" name="courseDuration" />
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

export default UpdateCourseInformation;