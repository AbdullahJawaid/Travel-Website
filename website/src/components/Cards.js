import React from 'react'
import CardItem from './CardItem'
import img1 from "../assets/images/img-1.jpg"
import img2 from "../assets/images/img-2.jpg"
import img3 from "../assets/images/img-3.jpg"
import img4 from "../assets/images/img-4.jpg"
import img5 from "../assets/images/img-5.jpg"
import img6 from "../assets/images/img-6.jpg"
import img7 from "../assets/images/img-7.jpg"
import img8 from "../assets/images/img-8.jpg"
import img9 from "../assets/images/img-9.jpg"


// style
import './Cards.css'

// const img1=images.img-9.jpg

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={img9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            lable='Advanture'
                            path='/services'
                        />
                        <CardItem
                            src={img2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            lable='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={img3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            lable='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={img4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            lable='Adventur'
                            path='/about'
                        />
                        <CardItem
                             src={img8}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            lable='Adrenaline'
                            path='/sign-up'
                        />

                </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards