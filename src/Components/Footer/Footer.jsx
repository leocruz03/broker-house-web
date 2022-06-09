import React from 'react'

// Styles
import '../../Assets/Styles/Footer.css'

// Pictures
import FooterLogo from '../../Assets/Images/Logo-Broker-Negro.png'
import SocialOne from '../../Assets/Images/icons8-facebook.svg'
import SocialTwo from '../../Assets/Images/icons8-instagram.svg'
import SocialThree from '../../Assets/Images/icons8-whatsapp.svg'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-one'>
                        <img src={ FooterLogo } alt='Logo' />
                        <div className='footer-social'>
                            <a href='#'><img src={ SocialOne } alt='' /></a>
                            <a href='#'><img src={ SocialTwo } alt='' /></a>
                            <a href='#'><img src={ SocialThree } alt='' /></a>
                        </div>
                    </div>
                    <div className='footer-two'>
                        <h3 className='footer-two-title'>Sobre Nosotros</h3>
                        <p className='footer-two-items'><a href='#'>¿Quiénes somos?</a></p>
                        <p className='footer-two-items'><a href='#'>Misión</a></p>
                        <p className='footer-two-items'><a href='#'>Visión</a></p>
                        <p className='footer-two-items'><a href='#'>Convenios</a></p>
                    </div>
                    <div className='footer-three'>
                        <h3 className='footer-three-title'>Ventas</h3>
                        <p className='footer-three-items'><a href='#'>Casas</a></p>
                        <p className='footer-three-items'><a href='#'>Apartamentos y apartaestudios</a></p>
                        <p className='footer-three-items'><a href='#'>Lotes</a></p>
                        <p className='footer-three-items'><a href='#'>Casa fincas</a></p>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>2022 ®. Broker House and Business. Todos los derechos reservados. <a href='#'>Aplican Terminos y codiciones</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer