import React from 'react';
import ProtectPage from './protect-page';

const auth = true;


const Profile = () =>  {
  return(
  auth ? <ProtectPage />:
  <div>You don't have permission</div>
  )
}

export default Profile;