/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
