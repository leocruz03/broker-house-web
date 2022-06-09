import React from 'react'

// Styles
import '../../Assets/Styles/Heroes.css'

// Components 
import HeroOne from './HeroOne'
import HeroTwo from './HeroTwo'
import HeroThree from './HeroThree'

const Body = () => {
    return (
        <>
            <div className='body-container'>
                <HeroOne />
                <HeroTwo />
                <HeroThree />
            </div>
        </>
    )
}

export default Body