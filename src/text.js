import React from 'react';
import "./style.css"
export default function Txt() {
    return (
        <div className='text'>
            <h3>Equilibrium#3429</h3>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className='price'>
                <div className='dflex'>
                    <img className='priceImg' src="./images/icon-ethereum.svg" />
                    <span className='eth'>0.041 ETH</span>
                </div>
                <div className='dflex'>
                <img className='dayImg' src="./images/icon-clock.svg" />
                <span className='day'>3 days left</span>
                </div>
            </div>
            <hr />
        </div>
    )
}