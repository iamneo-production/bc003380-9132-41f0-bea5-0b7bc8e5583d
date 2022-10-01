import { Component } from 'react';
import AuthenticationService from '../Authentication/AuthenticationService';

class UserHomePageComponent extends Component
{
  render()
  {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <div className="userHomePageComponent">

        {/* Masthead*/}
        <header className="masthead" >
          <div className="container">
            <div className="masthead-subheading ">     <div className="masthead-heading text-uppercase"> <span class="kulpreet"><i className="fa fa-user-circle-o fa-1x" />{isUserLoggedIn && <i class="fa fa-user-circle-o"></i> && JSON.parse(window.sessionStorage.getItem('authenticatedUser')).username}</span> </div>Welcome To The Abacus Acacdemy</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-warning btn-xl text-uppercase" href="#services">Tell Me More</a>
          </div>
        </header>

        
    {/* .container-fullwidth */}
</div>
            
    );
  }
}



export default UserHomePageComponent;