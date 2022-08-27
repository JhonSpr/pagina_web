import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PerfilPag = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border spinner-border-sm spinner-container" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <div>
       
       <div className="container-imagen">
       <img src={user.picture} alt={user.name} />
       </div>
       <div className="container-informacion">
       <h2 className="nickname">{user.nickname}</h2>
       <p className="nickname">{user.email}</p>
       <p className="nickname">{user.user_id}</p>
       <p className="nickname">{user.password_hash}</p>
       <p className="nickname">{user.last_login}</p>
       </div>
        
      
        
      </div>
       
      
    )
  );
};

export default PerfilPag;