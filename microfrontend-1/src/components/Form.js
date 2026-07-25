import { Button } from 'ComponentLibrary/Button';
import { InputField } from 'ComponentLibrary/InputField';


import React from 'react';

export const Form = () => {
  return (
    <div>
      <h1>Hero Section</h1>
      <Button buttonName="Click Me" />
      <InputField typeName="text" placeholder="Enter your name" />
    </div>
  );
};
