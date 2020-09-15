import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {motion} from 'framer-motion'
import Footer from '../components/footer'
import {D} from '../Data'


function Productdetails() {
    const params = useParams();
    console.log(params.id -1)
    let item = params.id- 1;

    return (
        <>
        <motion.div className="show" initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:0.8}} animate={{width:"0%"}} exit={{width:"100%"}}></motion.div>
        <motion.div className="product-page"
        initial='initial'
        animate='animate'
        exit='exit'>
            <div  className="container">
                <div className="flex-content">
                  <div className="image-container">
                    <img src={D[item].img} alt={D[item].name} />
                </div>
                  <div className="text-container">                    
                    <h1>{D[item].name}</h1>
                    <h1 className="price">{D[item].price}</h1>
                    <p>{D[item].description}</p>
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
