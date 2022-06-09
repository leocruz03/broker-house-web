import React from 'react'

// Styles
import '../../Assets/Styles/Heroes.css'

// Pictures
import bannerOneImg from '../../Assets/Images/banneroOne.jpg'

const HeroOne = () => {
    return (
        <>
            <div className='hero-one'>
                <div className='hero-one-content'>
                    <div className='hero-one-image'>
                        <img src={ bannerOneImg } alt='' lazyLoad={ true } />
                    </div>
                    <div className='hero-one-text'>
                        <h3>¿Quiénes somos?</h3>
                        <p>
                            Somos una empresa que pertenece al sector inmobiliario colombiano y
                            nuestra labor principal es suplir por completo la necesidad presentada 
                            por nuestros clientes, optimizando el tiempo de busqueda y teniendo la 
                            mejor opción de compra de tu inmueble soñado.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroOne