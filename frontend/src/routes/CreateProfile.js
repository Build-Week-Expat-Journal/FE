import React from 'react';

import CreateProfileForm from '../components/CreateProfileForm';
import Authlayout from '../components/AuthLayout';

const CreateProfile = () => {
  return (
    <Authlayout
      message={() => (
        <>
          Create a <span>profile</span>
        </>
      )}
      formAlign="left"
    >
      <CreateProfileForm />
    </Authlayout>
  );
};

export default CreateProfile;
