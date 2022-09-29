import React from 'react';
import Propertybox from './Propertybox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';
function properties() {
  return (
    <div className='product'>
    <div className='p-heading'>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque!</h3>
        </div> 
        <div className='product-container'>
            <Propertybox image={pimage1} name="Shinchan" price="$3,000,000" />
            <Propertybox image={pimage2} name="Doraemon" price="6,000,000" />
            <Propertybox image={pimage3} name="Hattori" price="9,000,000" />
            </div> 
    </div>
  )
}

export default properties