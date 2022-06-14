import React from 'react';
import './Cards.css';
import CardItem from './CardsItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Space'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Space'
                            path='/posts'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Space'
                            path='/posts'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Science'
                            path='/posts'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Space'
                            path='/posts'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;