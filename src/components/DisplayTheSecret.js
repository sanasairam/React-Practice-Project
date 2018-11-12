
import React from 'react';
import HOCex from './HOCex';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = HOCex(DisplayTheSecret);

export default WrappedComponent;