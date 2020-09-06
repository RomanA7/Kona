import React from 'react'
import {Link} from 'react-router-dom'

function footer() {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="flex-footer">
                    <span className="col3">
                        <h4>connect</h4>
                        <a href=""><p className="footer-font">Instagram</p></a> 
                        <a href=""><p className="footer-font">Facebook</p></a>
                    </span>
                    <span className="col3">
                        <h4>menu</h4>
                        <Link to="/"><p className="footer-font">Home</p></Link> 
                        <Link to="/About"><p className="footer-font">Our Story</p></Link>
                        <Link to="/shop"><p className="footer-font">Shop</p></Link>
                    </span>
                    <span className="col3">
                        <h4>Location</h4>
                        <p className="footer-font">Honolulu, HI 96815, United States</p>
                    </span>
                </div>
            </div>
            <Link to="/"><h3>Kona Coffee</h3></Link>
        </div>
    )
}

export default footer
