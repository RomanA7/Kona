import React from 'react'
import {Link} from 'react-router-dom'

function menuopen({ open }) {      

    return (
        <div className={`navigation ${open? "nav-open top" : ""}`}>
            <div className="nav-bg"></div>
            <div className="nav-container">
                <Link to="/"><h1>home</h1></Link>
                <Link to="/about"><h1>Our Story</h1></Link>
                <Link to="/shop"><h1>Shop</h1></Link>
            </div>
            
        </div>
    )
}

export default menuopen;
