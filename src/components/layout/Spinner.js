import React from 'react';
import spinnergif from './spinner.gif';

function Spinner() {
    return (
        <div>
            <img
            src={spinnergif}
            style={{width:'200px', margin:'auto', display:'block'}}
            alt="loading..."
            />
        </div>
    )
}

export default Spinner
