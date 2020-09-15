import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function menuopen({ open }) {      

    return (
        <div className={`navigation ${open? "nav-open top" : ""}`}>
            <div className="nav-bg"></div>
            <div className="nav-container">
                <Link to="/"><motion.h1 initial={open? {}:{opacity:0}} animate={open? {opacity:1}: {opacity:0,transition: {delay:0, duration: 0.1}}} transition={{delay:0.5,ease:[0,.95,1,1],duration:3}}>home</motion.h1></Link>
                <Link to="/about"><motion.h1 initial={open? {}:{opacity:0}} animate={open? {opacity:1}: {opacity:0,transition: {delay:0, duration: 0.1}}} transition={{delay:0.5,ease:[0,.95,1,1],duration:3}}>Our Story</motion.h1></Link>
                <Link to="/shop"><motion.h1 initial={open? {}:{opacity:0}} animate={open? {opacity:1}: {opacity:0,transition: {delay:0, duration: 0.1}}} transition={{delay:0.5,ease:[0,.95,1,1],duration:3}}>Shop</motion.h1></Link>
            </div>
            
        </div>
    )
}

export default menuopen;
