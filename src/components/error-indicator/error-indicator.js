
import React from 'react'
import './error-indicator.css'
import  icon from './death_star1.png'
const ErrorIndicator = () => {
    return(

        <div className='error-indicator'>
            <img className='deathStar' src={icon} alt="error-icon"/>
            <span className='boom'>BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
)
}
export default  ErrorIndicator
