import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Items from '../item/Items';
import './Shop.css'
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [card, setcard] = useState([]);
    console.log(card)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, []);

    const handeladd = (product) => {

        const newcard = [...card, product]
        setcard(newcard)
    }
    return (
        <div>
            <div className='shoppart'>
                <div className='shop'>

                    {
                        products.map(product => <Items
                            key={product.id}
                            product={product}
                            handeladd={handeladd}
                        >

                        </Items>)
                    }
                </div>
                <div className='cardcontainer p-5'>
                    <Card
                        card={card}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default Shop;