import React, { Component } from 'react';

import CourseService from '../../../../api/services/CourseService';

class CourseListing extends Component 
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
        CourseService.getCourseData().then((res) => {
            this.setState({ users: res.data });
        });
    }

    deleteUserClicked(courseId, courseName) {
        CourseService.deleteCourse(courseId)
            .then(
                response => {
                    this.setState({ message: `Delete of Course ${courseName} Successful` });
                    this.refreshUsers();
                }
            )
    }

    updateUserClicked(courseId) {
        this.props.navigate(`/admin-Course/${courseId}`);
    }

    addUserClicked() {
        this.props.navigate(`/admin-Course/-1`);
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Find Course information below</div>
                        </div>
                        <div>{this.state.message && <div className='alert alert-success'>{this.state.message}</div>}</div>
                        <div className="container">
                        <br/>
                            <table className="table table-hover table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                    
                                        <th>courseName</th>
                                        <th>courseDescription</th>
                                        <th>courseDuration</th>
                                        <th>UPDTAE / DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user =>
                                                <tr key={user.courseId}>
                                                    <td>{user.courseName}</td>
                                                    <td>{user.courseDescription}</td>
                                                    <td>{user.courseDuration}</td>
                                                    <td><button className='btn btn-warning' onClick={() => this.updateUserClicked(user.courseId, user.courseName)}>Update</button>   <button className='btn btn-danger' onClick={() => this.deleteUserClicked(user.courseId, user.courseName)}>Delete</button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addUserClicked}>Add a Course</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default CourseListing;