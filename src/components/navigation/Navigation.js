import React from 'react';


const Navigation = ({signinChange, isSignedin}) => {
    if (isSignedin){
      return (
        <div style={{ display:'flex', justifyContent:'right'}}>
            <h3 onClick={() => signinChange('signout')}className=" f3 link dim black pa3 pointer underline">Sign Out</h3>
        </div>
      );
    } else {
      return (
        <div style={{ display:'flex', justifyContent:'right'}}>
            <h3 onClick={() => signinChange('signin')}className=" f3 link dim black pa3 pointer underline">Sign In</h3>
            <h3 onClick={() => signinChange('register')}className=" f3 link dim black pa3 pointer underline">Register</h3>
        </div>
      );

    }
}

export default Navigation;