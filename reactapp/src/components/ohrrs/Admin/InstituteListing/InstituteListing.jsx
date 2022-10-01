import React, { Component } from 'react';

import InstituteService from '../../../../api/services/InstituteService';

class InstituteListing extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUserClicked = this.deleteUserClicked.bind(this);
        this.updateUserClicked = this.updateUserClicked.bind(this);
        this.addUserClicked = this.addUserClicked.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        InstituteService.getInstituteData().then((res) => {
            this.setState({ users: res.data });
        });
    }	

    deleteUserClicked(instituteId, instituteName) {
        InstituteService.deleteInstitute(instituteId)
            .then(
                response => {
                    this.setState({ message: `Delete of Institute ${instituteName} Successful` });
                    this.refreshUsers();
                }
            )
    }
   

    updateUserClicked(instituteId) {
        this.props.navigate(`/admin-Institute/${instituteId}`);
    }

    addUserClicked() {
        this.props.navigate(`/admin-Institute/-1`);
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Find Institute information below</div>
                        </div>
                        <div>{this.state.message && <div className='alert alert-success'>{this.state.message}</div>}</div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th>Institute Name</th>
                                        <th>Institute Description</th>
                                        <th>Institute Address</th>
                                        <th>Mobile</th>
                                          <th>Email</th>
                                          <th>UPDTAE / DELETE</th>
                                    </tr>
                                </thead>
                            
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user =>
                                                <tr key={user.instituteId}>
                                                    <td>{user.instituteName}</td>
                                                    <td>{user.instituteDescription}</td>
                                                    <td>{user.instituteAddress}</td>
                                                    <td>{user.mobile}</td>
                                                    <td>{user.email}</td>
                                                    <td><button className='btn btn-warning' onClick={() => this.updateUserClicked(user.instituteId, user.instituteName)}>Update</button>   <button className='btn btn-danger' onClick={() => this.deleteUserClicked(user.instituteId, user.instituteName)}>Delete</button></td>
                                                </tr> 
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addUserClicked}>Add a Institute</button>   
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default InstituteListing;