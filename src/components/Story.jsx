import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Story() {
    const animate = useAnimation();
    const [element, inView] = useInView({
        triggerOnce: true,
        rootMargin: "140px",
    });

    useEffect (() => {
      if (inView) {
          animate.start("show");
      }
    },[animate, inView]);


    return (
        <div className="story-section"> 
            <div className="container">
                <div className="left">
                <div className="text-container">
                    <motion.p className="number" ref={element} animate={animate} initial="hidden" transition={{duration: 1.4, ease: [0,.95,1,1], delay: 0.7}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 100} }}>1.</motion.p>
                    <motion.p ref={element} animate={animate} initial="hidden" transition={{duration: 1.8, ease: [0, 0.620, 0, 0.990], delay: 1}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 80} }}>Kona is not one place, and not all Kona coffee tastes the same. The final product depends on how you grow, farm, roast, brew and serve it.</motion.p>
                </div>
                <div className="text-container">
                    <motion.p className="number" ref={element} animate={animate} initial="hidden" transition={{duration: 1.4, ease: [0,.95,1,1], delay: 1.2}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 100} }}>2.</motion.p>
                    <motion.p ref={element} animate={animate} initial="hidden" transition={{duration: 1.8, ease: [0, 0.620, 0, 0.990], delay: 1.6}}  variants={{ show: {opacity: 1, y: 0}, hidden: {opacity: 0, y: 80} }}>Kona Coffee Purveyors aims to bring excellence to each step of the process, every single day, and we hope this is apparent in every sip. Mahalo.</motion.p>
                </div>
                <Link className="main-btn" to="/about" >Our Story</Link>
            </div> 
               <div className="right">
               <div className="image"></div>
            </div>   
            </div>
        </div>
    )
}

export default Story;
