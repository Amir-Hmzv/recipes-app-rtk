import React from 'react';
import {
MDBSpinner
  } from "mdb-react-ui-kit";
const Sniper = () => {
    return (
        <div className='text-center mt-5'>
            <MDBSpinner grow className='mt-2' style={{width:'3rem',height:'3rem'}}>
                <span className='visally-hidden'></span>
            </MDBSpinner>
        </div>
    );
};

export default Sniper;