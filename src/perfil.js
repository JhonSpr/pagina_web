import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <li className="navbar-item item-nav">
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
      </li>
       
      
    )
  );
};

export default Profile;