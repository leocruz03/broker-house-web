import React, { useState } from 'react'

// Styles
import '../../Assets/Styles/Navbar.css'

// Pictures
import Brand from '../../Assets/Images/Logo-Broker-blanco.png'
import Menu from '../../Assets/Images/icons8-menu-32.png'
import Close from '../../Assets/Images/icons8-x-32.png'

const Navbar = () => {

    // State navbar scroll down
    const [ colorNav, setColorNav ] = useState(false)

    const handleScrollNav = () => {
        window.screenY >= 20 ? setColorNav(true) : setColorNav(false)
    }

    window.addEventListener( 'scroll', handleScrollNav )

    // State navbar responsive
    const [ navResponsive, setNavResponsive ] = useState(false)

    const handleClickNavbarResponsive = () => {
        setNavResponsive(!navResponsive)
    }

    const handleClickNavbarResponsiveClose = () => {
        setNavResponsive(false)
    }

    return (
        <>
            <nav className={ colorNav ? 'nav color' : 'nav' }>
                <div className='logo-container'>
                    <a href='/' className='logo'>
                        <img src={ Brand } alt='logo' className='' />
                    </a>
                </div>
                <div className='menu-icons' onClick={ handleClickNavbarResponsive }>
                    <img src={ navResponsive ? Close : Menu } className='icon-responsive' alt='icons' />
                    {/* <i className={ navResponsive ? 'bx bx-x' : 'bx bx-menu-alt-right' }></i> */}
                </div>
                <ul className={ navResponsive ? 'nav-menu responsive' : 'nav-menu' }>
                    <li className='nav-item'><a target={ '_blank' } href='https://forms.gle/8fhTsWqttbxS8riWA' className='link' onClick={ handleClickNavbarResponsiveClose }>Encuesta</a></li>
                    <li className='nav-item'><a target={ '_blank' } href='https://api.whatsapp.com/send?phone=573165245190&text=Hola%2C%20estoy%20interesado%20en%20saber%20m%C3%A1s%20sobre%20la%20empresa%20y%20poder%20buscar%20un%20inmueble%20ya%20sea%20en%20arriendo%20o%20venta%2C%20o%20poder%20poner%20en%20arriendo%20o%20en%20venta%20mi%20inmueble' className='link' onClick={ handleClickNavbarResponsiveClose }>Contáctanos</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar