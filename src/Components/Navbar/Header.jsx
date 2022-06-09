import React from 'react'

// Styles
import '../../Assets/Styles/Navbar.css'

// Components
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <Navbar />
            </div>
        </>
    )
}

export default Header