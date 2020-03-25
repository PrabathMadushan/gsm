import React, { useState } from "react";
import './dialog.scss'

const Dialog = ({children}) => {
    const initialState={
        show:false
    }
    const {state,setState} = useState(initialState);
    return <div className='com-dialog-main-wrapper '>
            <div className='dialog-body'>
                {children}
            </div>
        </div>
};

export default Dialog;
