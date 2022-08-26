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
        <img src={user.picture} alt={user.name} />
        <p>{user.name}</p>
      </li>
       
      
    )
  );
};

export default Profile;