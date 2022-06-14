import React, {useEffect} from 'react';
import '../../App.css';
import  Button from '../buttons/Button';
import './Header.css';
import Cards from "../Cards/Cards";

function HeroSection() {

    const background = () => {
        const container = document.querySelector('#test');
        console.log(container)

        window.onmousemove = function (e) {
            let x = e.clientX / 12;
            let y = e.clientY / 12;

            container.style.backgroundPositionX = x + 'px';
            container.style.backgroundPositionY = y + 'px';
        }
    }

    useEffect(() => {
       background();
    }, []);


    return (
        <>
        <section className='header'>
        <div className='hero-container' id='test'>
            {/*<img src='' autoPlay loop muted />*/}
            <h1>Explore</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
        </section>

            {/*Card Components*/}
            <Cards />

        </>
    );





}

export default HeroSection;