import React from "react";
import { Spinner } from 'react-bootstrap';

const LoadingIndicator = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner animation="border"></Spinner>
      <span className="ms-2">Loading ...</span>
    </div>
  )
}

export default LoadingIndicator;