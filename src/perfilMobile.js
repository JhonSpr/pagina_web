import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border spinner-border-sm spinner-container" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <li className="navbar-item perfil-container-mobile" >
       
   
       <i className="fa-solid fa-user-large"></i>
       
        <a href="/perfil"> 
        
        <h2 className="nickname">{user.nickname}</h2>
       
      </a>
        
      </li>
       
      
    )
  );
};

export default Profile;