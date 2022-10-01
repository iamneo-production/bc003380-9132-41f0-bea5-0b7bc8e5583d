import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import InstituteService from "../../../../api/services/InstituteService";

class UpdateUserInformationComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            instituteId: this.props.params.instituteId,
            instituteName : '', 
            instituteDescription : '',
            instituteAddress : '',
            mobile : '',
            email: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validate(values)
    {
        let errors = {}

      

        if(!values.instituteName){
            errors.instituteName = 'Please enter the Name of the Institute'
        } else if (values.instituteName.length < 3) {
            errors.instituteName = 'Please enter atleast 3 characters  Institute Name'
        }
      

        if(!values.instituteDescription){
            errors.instituteDescription = 'Please enter the institute Description '
        }

        if(!values.instituteAddress)
        {
            errors.instituteAddress = 'Please enter the instituteAddress for the institute'
        }

        if(!values.mobile){
            errors.mobile = 'Please enter the mobile '
        } 
        
        if(!values.email){
            errors.email = 'Please enter the email '
        } 

        return errors;
    }

    componentDidMount()
    {
        console.log(InstituteService.getSpecificInstituteData(this.state.instituteId))
        InstituteService.getSpecificInstituteData(this.state.instituteId)
            .then(response => this.setState({
                instituteName: response.data.instituteName,
                instituteDescription: response.data.instituteDescription,
                instituteAddress: response.data.instituteAddress,
                mobile: response.data.mobile,
                email: response.data.email
            }))
    }
   

    handleChange(event) {
        console.log(event.target.instituteName)
        this.setState({ [event.target.instituteName]: event.target.value })
    }

    onSubmit(values)
    {
        if(this.state.instituteId === -1)
        {
            InstituteService.addInstitute({
                instituteId: this.state.instituteId,
                instituteName: values.instituteName,
                instituteDescription: values.instituteDescription,
                instituteAddress: values.instituteAddress,
                mobile: values.mobile,
                email: values.email
            })
            
            .then(
                () => this.props.navigate('/admin-Institute')
            )
        }
        else
        {
            InstituteService.addInstitute({
                instituteId: this.state.instituteId,
                instituteName: values.instituteName,
                instituteDescription: values.instituteDescription,
                instituteAddress: values.instituteAddress,
                mobile: values.mobile,
                email: values.email
            })
            .then(
                () => this.props.navigate('/admin-Institute')
            )
        }
    }

    render()
  
    {
        let { instituteName, instituteDescription, instituteAddress,mobile, email } = this.state

        return (
            <div className="updateUserInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div className="container">
                            <div className="masthead-subheading">Institute information of - {this.props.params.instituteId}</div>
                <br/>
                </div>
                <div className="container border border-warning">
                    <Formik 
                        initialValues = {{  instituteName, instituteDescription, instituteAddress, mobile , email}} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >


                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                                        <ErrorMessage name="instituteName" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="instituteDescription" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="instituteAddress" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="mobile" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="email" component="div" className="alert alert-warning" />
                                      
                                        
                                        <fieldset className="form-group">
                                            <label>Institute Name</label>
                                            <Field className="form-control" type="text" name="instituteName" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Institute Description</label>
                                            <Field className="form-control" type="text" name="instituteDescription" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Institute Address</label>
                                            <Field className="form-control" type="text" name="instituteAddress" />
                                        </fieldset>
                                       
                                        <fieldset className="form-group">
                                            <label>Institute Mobile</label>
                                            <Field className="form-control" type="text" name="mobile" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Institute Email</label>
                                            <Field className="form-control" type="text" name="email" />
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

export default UpdateUserInformationComponent;