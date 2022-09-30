import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../User/Authentication/AuthenticationService';
import AdminAuthenticationService from '../Admin/Authentication/AdminAuthenticationService';


class HeaderComponent extends Component 
{
    render() 
    {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const isAdminLoggedIn = AdminAuthenticationService.isAdminLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
                    <div className="container">
                        <h1 className="navbar-brand">ABACUS ACADEMY</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                        <i className="fas fa-bars ms-1" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                {isUserLoggedIn && <li><Link className="nav-link" to="/home/:name">Home</Link></li>}
                                {isUserLoggedIn && <li><Link className="nav-link" to="/admission">Admission</Link></li>}
                              
                                {isAdminLoggedIn && <li><Link className="nav-link" to="">Home</Link></li>}
                                {isAdminLoggedIn && <li><Link className="nav-link" to="/admin-course">Course</Link></li>}
                                {isAdminLoggedIn && <li><Link className="nav-link" to="/admin-Institute">Institute</Link></li>}
                                {isAdminLoggedIn && <li><Link className="nav-link" to="/admin-Student">Student</Link></li>}
                                
                            </ul>
                        </div>
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <div className="navbar-nav navbar-collapse justify-content-end">
                            {(!isAdminLoggedIn && !isUserLoggedIn) && <li><Link className="nav-link" to="/admin-login"><i className="fa fa-user-circle-o fa-1x" />Admin-Login</Link></li>}
                            {(!isAdminLoggedIn && !isUserLoggedIn) && <li><Link className="nav-link" to="/login"><i className="fa fa-user-circle-o fa-1x" /> USER-Login</Link></li>}
                            {(isUserLoggedIn && !isAdminLoggedIn) &&<li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}

                            {(isAdminLoggedIn && !isUserLoggedIn) && <li><Link className="nav-link" to="/logout" onClick={AdminAuthenticationService.logout}>Logout</Link></li>}
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}


    

export default HeaderComponent