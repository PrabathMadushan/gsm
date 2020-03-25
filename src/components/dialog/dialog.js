import React from "react";
import './dialog.scss'

const Dialog = ({children}) => {

    return <div className='com-dialog-main-wrapper'>
            <div className='dialog-body'>
                {children}
            </div>
        </div>
};

export default Dialog;
