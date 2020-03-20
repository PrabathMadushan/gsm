import React from 'react'
import './UserIcon.scss'
import image from '../../resources/user.png'

const UserIcon = () =>{
    return(
        <div className="user-icon-wrapper">
            <img src={image} alt='user'/>
        </div>
    )
}

export default UserIcon;