import React from 'react'

// Styles
import '../../Assets/Styles/Heroes.css'

// Pictures
import bannerThreeImg from '../../Assets/Images/survey.png'

const HeroThree = () => {
    return (
        <>
            <div className='hero-three'>
                <div className='hero-three-content'>
                    <div className='hero-three-text'>
                        <h3>Encuesta</h3>
                        <p>
                            En Broker House & Business trabajamos para usted, le ayudamos a conseguir el inmueble que llene sus expectativas y supla sus necesidades en este formulario, regístrate, llena todos los campos y daremos respuesta a tú requerimiento.
                        </p>
                        <div className='hero-three-btn'>
                            <a target='_blank' href='https://forms.gle/8fhTsWqttbxS8riWA' className='hero-three-cta'>Llenar Encuesta</a>
                        </div>
                    </div>
                    <div className='hero-three-image'>
                        <img src={ bannerThreeImg } alt='' lazyLoad={ true } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroThree