import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="navbar-item item-nav">Cargando ...</div>;
  }

  return (
    isAuthenticated && (
      <li className="navbar-item item-nav">
       <a href={user.nickname}> </a>
       <img src={user.picture} alt={user.name} />
        <h2>{user.nickname}</h2>
      
        
      </li>
       
      
    )
  );
};

export default Profile;