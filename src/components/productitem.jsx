import React from 'react'
import {Link} from 'react-router-dom'




function Productitem({item}) { 
      
    return (
        <Link to={`/shop/${item.id}`} className="product-item">
            <span className="left-top"></span>
            <span className="right-bottom"></span>
            <img src={item.img} alt={item.name}/>
            <h5 className="product-name">{item.name}</h5>
            <h5 className="price">{item.price}</h5>
        </Link>
    )
}

export default Productitem; 
