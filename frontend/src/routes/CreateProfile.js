import React from 'react';

import CreateProfileForm from '../components/CreateProfileForm';
import Authlayout from '../components/AuthLayout';

const CreateProfile = () => {
  return (
    <Authlayout
      titleSize={32}
      subTitle={() => (
        <>
          Create a <br />
          <span>profile</span>
        </>
      )}
      formAlign="left"
    >
      <CreateProfileForm />
    </Authlayout>
  );
};

export default CreateProfile;
