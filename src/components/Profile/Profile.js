import { Typography } from '@material-ui/core'
import React from 'react'
import './Profile.css'
import displayImage from '../../assets/images/displayImage.jpg'
import CustomTimeline from '../Timeline/Timeline'
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
                <CustomTimeline/>
            
                 <button>My Button</button>
            </div>
        </div>
    )
}

export default profile
