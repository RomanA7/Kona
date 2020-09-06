import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {DATA} from '../Data'
import {motion} from 'framer-motion'
import Footer from '../components/footer'

//did not want to use another map() in here

function Productdetails({match}) {
    let item = match.params.id -1;

    return (
        <>
        <motion.div className="show" initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:0.8}} animate={{width:"0%"}} exit={{width:"100%"}}></motion.div>
        <motion.div className="product-page"
        initial='initial'
        animate='animate'
        exit='exit'>
            <div className="container">
                <div className="flex-content">
                  <div className="image-container">
                    <img src={DATA[item].img} alt={DATA[item].name} />
                </div>
                  <div className="text-container">                    
                    <h1>{DATA[item].name}</h1>
                    <h1 className="price">{DATA[item].price}</h1>
                    <p>{DATA[item].description}</p>
                    <Link className="buy-btn" to="/">Buy Now</Link> 
                </div>
                </div>
            </div>        
        </motion.div>
        <Footer />
        </>
    )
}

export default Productdetails;
