import React from 'react'
import Products from '../components/products'
import Footer from '../components/footer'
import {motion} from 'framer-motion'

function Shop({products,sortItems,sort}) {
    //console.log(sort);

    return (
        <>
          <motion.div className="show" initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:0.8}} animate={{width:"0%"}} exit={{width:"100%"}}></motion.div>
          <motion.div className="shop-section">
          <div className="container">
            <motion.h4 initial={{y: 30,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.7,ease:[0,.95,1,1],duration:1}}>Shop</motion.h4>
            <motion.h1 initial={{y: 70,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.9,ease:[0,.95,1,1],duration:1.5}}>Our Products</motion.h1>
            <Products products={products} sort={sort} sortItems={sortItems} />
          </div>
          <Footer /> 
          </motion.div>
        </>
    )
}

export default Shop;
