import React from 'react';
import "./Items.css"
const Items = ( props ) => {
    const {product,handeladd}=props
    const { category, name, seller, price,img } = product
   
    
    return (
        <div >
            <div className="card w-80 bg-base-100 shadow-xl border-solid border-2 border-indigo-600">
                <img className='productimg' src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">
                        
                        <div className="bg-black text-white p-2">{name}</div>
                    </h2>
                    <p className='text-lg font-semibold' >Price: {price}</p>
                  
                </div>
                <div>
                   <button onClick={()=>handeladd(product)} className="btn btn-outline w-80">Buy Now</button>
                   </div>
            </div>
        </div>
    );
};

export default Items;