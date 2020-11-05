import React from 'react'

const ErrorMessage = ({ mensaje }) => {
    return ( 
        <p className="red darken-4 error">
            {mensaje}
        </p>
     );
}
 
export default ErrorMessage;