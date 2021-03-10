import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import displayImage from '../../assets/images/displayImage.jpg'
const profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Alex </Typography>
                <Typography className='title'>Alex </Typography>

            </div>
            <figure className='profile_image'>
                <img src={displayImage}/>
            </figure>

            <div className="profile_information">
                Insert Timeline 
                <br/>
                 <button>My Button</button>
            </div>
        </div>
    )
}

export default profile
