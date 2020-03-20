import React from 'react'
import './TimeLabel.scss'
import { MdTimer } from "react-icons/md";
const TimeLabel=()=>{
    return(
        <div className="time-label-wrapper">
            <MdTimer/> Jan 12 12:00 PM 
        </div>
    )
}

export default TimeLabel