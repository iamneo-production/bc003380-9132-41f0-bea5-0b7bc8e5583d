import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginComponent from './User/Authentication/LoginComponent';
import UserRegistrationComponent from './User/UserRegistrationComponent';
import UserHomePageComponent from './User/UserHomePage/UserHomePageComponent';

import AuthenticatedRoute from './User/Authentication/AuthenticatedRoute';

import InstituteListing from './Admin/InstituteListing/InstituteListing';
import BookingsComponent from './User/UserHomePage/BookingsComponent';

import HeaderComponent from './HeaderFooterComponents/HeaderComponent';
import FooterComponent from './HeaderFooterComponents/FooterComponent';

import LogoutComponent from './User/Authentication/LogoutComponent';

import CourseListing from './Admin/CourseListing/CourseListing';
import AdminLoginComponent from './Admin/Authentication/AdminLoginComponent';
import AdminHomePageComponent from './Admin/AdminHomePage/AdminHomePageComponent';

import AdminAuthenticatedRoute from './Admin/Authentication/AdminAuthenticatedRoute';
import AdminLogoutComponent from './Admin/Authentication/AdminLogoutComponent';


import withNavigation from './Routing/withNavigation';
import withParams from './Routing/withParams';

import UpdateCourseInformation from './Admin/CourseListing/UpdateCourseInformation';
import UpdateUserInformationComponent from './Admin/InstituteListing/UpdateUserInformation';

import ListUserComponent from './Admin/UserListing/ListUserComponent';
import UpdateStudentComponent from './Admin/UserListing/UpdateStudentComponent';





class Abc extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const AdminLoginComponentWithNavigation = withNavigation(AdminLoginComponent);

        const CourseListingWithNavigation = withNavigation(CourseListing);

        const UserHomePageComponentwithParams = withParams(UserHomePageComponent);
        const AdminHomePageComponentWithParams = withParams(AdminHomePageComponent);

        const UserRegistrationComponentWithNavigation = withNavigation(UserRegistrationComponent);

        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        const InstituteListingComponentWithNavigation = withNavigation(InstituteListing);

        const UpdateUserInformationComponentWithParamsAndNavigation = withParams(withNavigation(UpdateCourseInformation));
        const UpdateUserInformationComponentWithParamsAndNavigation1 = withParams(withNavigation(UpdateUserInformationComponent));
        const UpdateUserInformationComponentWithParamsAndNavigation2 = withParams(withNavigation(UpdateStudentComponent));

        const ListUserComponentWithNavigation = withNavigation(ListUserComponent);
        
        

        return (
            <div className="CogniStay">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<UserHomePageComponent />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/registration" element={<UserRegistrationComponentWithNavigation />} />
                        <Route path="/home/:name" element={<AuthenticatedRoute><UserHomePageComponentwithParams /></AuthenticatedRoute>} />
                        <Route path="/admission" element={<AuthenticatedRoute><BookingsComponent /></AuthenticatedRoute>} />
                        

                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />

                        <Route path="/admin-Login" element={<AdminLoginComponentWithNavigation />} />
                        <Route path="/admin-Course/:courseId" element={<AdminAuthenticatedRoute><UpdateUserInformationComponentWithParamsAndNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-Course" element={<AdminAuthenticatedRoute><CourseListingWithNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-Home/:courseId" element={<AdminAuthenticatedRoute><AdminHomePageComponentWithParams /></AdminAuthenticatedRoute>} />

                        <Route path="/admin-Institute" element={<AdminAuthenticatedRoute><InstituteListingComponentWithNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-Institute/:instituteId" element={<AdminAuthenticatedRoute><UpdateUserInformationComponentWithParamsAndNavigation1 /></AdminAuthenticatedRoute>} />
                        
                        <Route path="/admin-Student/:studentId" element={<AdminAuthenticatedRoute><UpdateUserInformationComponentWithParamsAndNavigation2 /></AdminAuthenticatedRoute>} />
                        
                        <Route path="/admin-Student" element={<AdminAuthenticatedRoute><ListUserComponentWithNavigation /></AdminAuthenticatedRoute>} />

                        <Route path="/admin-Logout" element={<AdminAuthenticatedRoute><AdminLogoutComponent /></AdminAuthenticatedRoute>} />
                        
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

function ErrorComponent() 
{
    return(
        <div class="p-3 mb-2 text-danger"><center> An unexpected error has occured, please contact us  </center></div>
    )
}

export default Abc;