import React from 'react';
import "./Card.css"
const Card = (props) => {
    const { card } = props
    let total = 0
    let shipping=0
    let totalshipping
    for (const product of card) {
        total = total + product.price
        shipping=shipping+product.shipping
        totalshipping=total+shipping
    }
    return (
        <div className='card1'>
            <h1 className='text-2xl font-semibold'>summary</h1>
            <p className='text-lg font-semibold'>seleted item:{card.length}</p>
            <p className=' font-semibold'>Total price:${total}</p>
            <p className=' font-semibold'>Shipping:${shipping}</p>
            <p className=' font-semibold'>total shippping:${totalshipping}</p>
            <p className=' font-semibold'>Tex:$ 0</p>
        </div>
    );
};

export default Card;