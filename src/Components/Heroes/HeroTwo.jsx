import React from 'react'

// Styles
import '../../Assets/Styles/Heroes.css'

// Pictures
import PropertyOne from '../../Assets/Images/IMG_8269.jpg'
import PropertyTwo from '../../Assets/Images/IMG_3296.jpg'
import PropertyThree from '../../Assets/Images/IMG_8243.jpg'

//Components
import Card from '../Cards/Card'

const HeroTwo = () => {

    // Infomtion of the cards
    const cards = [
        {
            id: 1,
            title: 'Casa en sector pandeazucar, Bucaramanga, Santander',
            description: 'Vista a la reserva natural, con jacuzzi para 7 personas.',
            rooms: '5',
            price: '$1.300.000.000',
            mts: '480',
            img: PropertyOne,
            link: 'https://api.whatsapp.com/send?phone=573165245190&text=Hola%2C%20me%20encuentro%20interesado%20en%20la%20propiedad%20x%2C%20me%20gustar%C3%ADa%20saber%20mucho%20m%C3%A1s%20sobre%20ella%2C%20gracias'
        },
        {
            id: 2,
            title: 'Lote en La Mesa de Los Santos, Santander',
            description: 'Lote con vista hacía el salto del duende en conjunto cerrado, con vista 180°.',
            rooms: 'No hay',
            price: '$160.000.000',
            mts: '1450',
            img: PropertyTwo,
            link: 'https://api.whatsapp.com/send?phone=573165245190&text=Hola%2C%20me%20encuentro%20interesado%20en%20la%20propiedad%20x%2C%20me%20gustar%C3%ADa%20saber%20mucho%20m%C3%A1s%20sobre%20ella%2C%20gracias'
        },
        {
            id: 3,
            title: 'Casa campestre. Piedecuesta, Santander',
            description: 'Con piscina para adulto y niños, dentro de conjunto cerrado.',
            rooms: '5',
            price: '$2.100.000.000',
            mts: '600',
            img: PropertyThree,
            link: 'https://api.whatsapp.com/send?phone=573165245190&text=Hola%2C%20me%20encuentro%20interesado%20en%20la%20propiedad%20x%2C%20me%20gustar%C3%ADa%20saber%20mucho%20m%C3%A1s%20sobre%20ella%2C%20gracias'
        },
    ]

    return (
        <>
            <div className='hero-two' id='1'>
                <h2 className='hero-two-title'>
                    Propiedades destacadas
                </h2>
                <div className='hero-two-content'>
                    { cards.map(card => (  <Card
                                                key={ card.id }
                                            title={ card.title }
                                        description={ card.description }
                                    rooms={ card.rooms }
                                price={ card.price }
                            mts={ card.mts }
                        img={ card.img }
                    link={ card.link }
                    />)) }
                </div>
            </div>
        </>
    )
}

export default HeroTwo