import React from "react";
import './Button.css';
import { Link } from "react-router-dom";

// define button size and style class for styling
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// passing the data
export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    //set type of btn
    const checkButtonStyle = STYLES.includes( buttonStyle ) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes( buttonSize ) ? buttonSize : STYLES[0];

    //making btn
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}  type={type} >
                {children}
            </button>
        </Link>
    )

}

export default Buttons