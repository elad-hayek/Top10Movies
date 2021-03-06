import React from 'react';
import Alert from 'react-bootstrap/Alert';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: "" };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error: error };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <Alert variant="danger" dismissible>{this.state.error}</Alert>
        );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;