import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

class Bootstrap extends Component {
   
    render() {
        let test = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {idx} {variant} alert—check it out!
            </Alert>
          ));
        return (
            <div>
                {test}
            </div>
        );
    }
}

export default Bootstrap;