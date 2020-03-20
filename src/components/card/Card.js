import React from 'react'
import './Card.scss'
import { FiEdit3 } from "react-icons/fi";
import TimeLabel from '../time-label/TimeLabel';
import UserIcon from '../user-icon/UserIcon';
const Card = ({name}) => {
    return(
        <div className='card-wrapper'>
            <div className='action'><FiEdit3/></div>
            <div className='title'>{name}</div>
            <div className='time'><TimeLabel/></div>
            <div className='members'>
               <UserIcon/>
               <UserIcon/>
               <UserIcon/>
               <UserIcon/>
            </div>
        </div>
    )
}

export default Card;