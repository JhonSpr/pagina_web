import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border text-secondary navbar-item" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <li className="navbar-item ">
       
       <img src={user.picture} alt={user.name} />
       <a href="/perfil" className="perfil-container"> 
        <h2 className="nickname">{user.nickname}</h2>
      </a>
        
      </li>
       
      
    )
  );
};

export default Profile;