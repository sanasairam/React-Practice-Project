import React, { Component } from 'react';

const HOCex = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          secretToLife={46}
        />
      );
    }
  }
    
  return HOC;
};

export default HOCex;