import React from 'react'

import '../header/header.css'

const Header = () => {
    return (
        <div className='header d-flex'>
            <h3>
                <a className='headerMenu logoName' href="#">
                    Star DB
                </a>
            </h3>
            <ul className='d-flex'>
                <li>
                    <a className='headerMenu' href="#">People</a>
                </li>
                <li>
                    <a className='headerMenu' href="#">Planets</a>
                </li>
                <li>
                    <a className='headerMenu' href="#">Starships</a>
                </li>
            </ul>
        </div>
    )
}
 export default Header
