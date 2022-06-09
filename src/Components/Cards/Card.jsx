import React from 'react'

// Styles
import '../../Assets/Styles/Card.css'

const Card = ( { key, title, description, rooms, price, mts, img, link } ) => {
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <img src={ img } alt={ title } lazyLoad={ true } />
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{ title }</h3>
                    <p className='card-description'>{ description }</p>
                    <div className='card-information'>
                        <p className='card-rooms'>{ rooms } hab.</p>
                        <p className='card-mts'>{ mts } M2</p>
                    </div>
                    <p className='card-price'>{ price }</p>
                    <div className='card-btn'>
                        <a className='card-cta' target='_blank' href={ link }>Más información</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card