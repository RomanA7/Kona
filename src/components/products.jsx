import React, { useState,useEffect } from 'react'
import Productitem from './productitem'
import {DATA} from '../Data'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Products() {
    const [products, setProducts] = useState([]);
    const animate = useAnimation();
    const [element, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-180px",
    });

    useEffect(() => {       
      setProducts(DATA);

      if (inView) {
        animate.start("show");
    }
    },[animate, inView])

    
    return (
        <motion.div className="product-section">
            <div className="container">             
              <div className="product-heading">
                  <motion.h4 ref={element} animate={animate} initial="hidden" transition={{duration: 1, ease: [0,.95,1,1], delay: 0.4}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 50} }}>EXPLORE 100% KONA COFFEE</motion.h4>
                  <motion.h3 ref={element} animate={animate} initial="hidden" transition={{duration: 1.4, ease: [0, 0.620, 0, 0.990], delay: 0.7}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 50} }}>We work hard to let go and allow the beans to reveal themselves</motion.h3>
              </div>

              <motion.div ref={element} animate={animate} initial="hidden" transition={{duration: 1, ease: [0,.95,1,1], delay: 1.2}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 80} }} className="flex-products">                
                 {products.map(item => <Productitem item={item} key={item.id} />)}
              </motion.div>
            </div> 
        </motion.div>
    )
}

export default Products;
