import React from 'react'

// Components
import Header from './Components/Navbar/Header'
import Body from './Components/Heroes/Body'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <>
            <div className='app-container'>
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    )
}

export default App