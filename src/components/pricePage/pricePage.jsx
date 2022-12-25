import React, { useState, useEffect } from 'react';
import Watermark from '../watermark/watermark';
import menu from './../../assets/images/menuExample.png';
import './pricePage.scss';


const PriceCalc = () => {
    const [guestCount, setGuestCount] = useState(20);
    const [price, setPrice] = useState(0);
    const flatFee = 150;

    useEffect(() => {
        setPrice(flatFee + (7 * guestCount))
    }, [guestCount]);

    const handleChange = e => {
        let count = e.target.value
        if (count < 20) {
            // e.target.value = 20
            setGuestCount(20)
        } else if (count > 150) {
            // e.target.value = 150
            setGuestCount(150)
        } else {
            setGuestCount(count)
        }
    }

    return (
        <div className='price-calc'>
            <h3>Price Calculator</h3>
            <h4>This is only a tool for estimation, the actual cost may differ.</h4>
            <label htmlFor="priceCalc">Guest Amount: {guestCount}</label>
            <input 
                type="range"
                min="20"
                max="150"
                placeholder='20'
                onChange={handleChange}
                id="priceCalc"
                />
            <div className='priceTotal'>Total: ${price}</div>
        </div>
    )
}


const PricePage = () => {

    return (
        <>
            <Watermark/>
            <div className="price-page">
                <p id='price-opening-text'>Looking to add coffee perfection to your next event?<br/>I got you covered &#60;3</p>
                <br/>
                <div>
                    <h3>Moblie Fee / Downpayment - $150</h3><br/>

                    <h3>$7 per guest, or the number of coffees to be made available</h3>
                        <h4>Minimum of 20 coffees<br/>
                            Maximum of 150 coffees<br/>
                        <sup><i>(The maximum number may vary pertaining to the event, contact for more info!)</i></sup></h4>
                    <br/>

                    <h3>Menu</h3>
                    <h4>The exact contents will differ based on the what options you would like,<br/>here is an example of what the menu will look like:</h4>
                    <img id="example-menu" src={menu} alt="example logo containing a list of diffrent coffee types, as well as flavors"/>
                </div>
            </div>
            <PriceCalc/>
        </>
    )
}

export default PricePage;