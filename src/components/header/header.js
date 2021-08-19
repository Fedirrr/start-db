import React from 'react'
import {Link} from "react-router-dom";
import '../header/header.css'

const Header = () => {
    return (
        <div className='header d-flex'>
            <h3>
                <Link to='/' className='headerMenu logoName'>
                    Star DB
                </Link>
            </h3>
            <ul className='d-flex'>
                <li>
                    <Link to='/people/' className='headerMenu'>People</Link>
                </li>
                <li>
                    <Link to='/planets/' className='headerMenu'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships/' className='headerMenu'>Starships</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/secret'>Secret</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header
