import React from 'react';

import CreateProfileForm from '../components/CreateProfileForm';
import Authlayout from '../components/AuthLayout';

const CreateProfile = () => {
  return (
    <Authlayout
      message={() => (
        <>
          <h1>
            Create a <span>profile</span>
          </h1>
        </>
      )}
      formAlign="left"
    >
      <CreateProfileForm />
    </Authlayout>
  );
};

export default CreateProfile;
