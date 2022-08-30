import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const ProfileMobile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border spinner-border-sm spinner-container spinner-mobile" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <li className="navbar-item perfil-container-mobile" >
   
       <i className="fa-solid fa-user-large"></i>
        <Link to={`/perfil/${user.nickname}`}> 
        <h2 className="nickname">{user.nickname}</h2>
       
      </Link>
        
      </li>
       
      
    )
  );
};

export default ProfileMobile;