import React from 'react';
import './button.css'
function Button({label}){

    return <div data-testid="button1" className='button-style'>hey {label}</div>

};

export default Button;