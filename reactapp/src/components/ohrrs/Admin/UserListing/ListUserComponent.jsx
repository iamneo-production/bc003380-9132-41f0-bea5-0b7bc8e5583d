import React, { Component } from 'react';

import StudentService from '../../../../api/services/StudentService';

class ListUserComponent extends Component 
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
        StudentService.getStudentData().then((res) => {
            this.setState({ users: res.data });
        });
    }

    deleteUserClicked(studentId, studentName) {
        StudentService.deleteStudent(studentId)
            .then(
                response => {
                    this.setState({ message: `Delete of User ${studentName} Successful` });
                    this.refreshUsers();
                }
            )
    }

  

    updateUserClicked(studentId) {
        this.props.navigate(`/admin-Student/${studentId}`);
    }

    addUserClicked() {
        this.props.navigate(`/admin-Student/-1`);
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Find Student information below</div>
                        </div>
                        <div>{this.state.message && <div className='alert alert-success'>{this.state.message}</div>}</div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    <th> Student Name</th>
                                        <th>Student DOB</th>
                                        <th>Address</th>
                                        <th>Mobile</th>
                                        <th>Age</th>
                                        <th>Update / Delete</th>
                                        
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user =>
                                                <tr key={user.studentId}>
                                                    <td>{user.studentName}</td>
                                                    <td>{user.studentDOB}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.mobile}</td>
                                                    <td>{user.age}</td>
                                                    <td><button className='btn btn-warning' onClick={() => this.updateUserClicked(user.studentId, user.studentName)}>Update</button>   <button className='btn btn-danger' onClick={() => this.deleteUserClicked(user.studentId, user.studentName)}>Delete</button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addUserClicked}>Add a Student</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default ListUserComponent;