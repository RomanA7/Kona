import React, {useRef, useEffect} from 'react'
import Background from '../images/background.jpg'
import {motion} from 'framer-motion'

function Hero() {
  const element = useRef(null);

  useEffect(() => {

  }, []);
  
  const scrollEvent = () => window.scrollTo({ behavior: 'smooth', top: element.current.getBoundingClientRect().bottom + window.pageYOffset })

    return (
        <motion.div  ref={element} className="background-image container"         
        initial='initial'
        animate='animate'
        exit='exit'> 
          <motion.img initial={{opacity: 0,scale: 1.6}} animate={{opacity: 1,scale: 1}} transition={{delay:0.3,ease:[0,.95,1,1],duration:12}} src={Background} alt=""/>
          <div className="header">
            <motion.h4 initial={{y: 30,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.7,ease:[0,.95,1,1],duration:1}}>FOR THE PEOPLE.</motion.h4>
            <motion.h1 initial={{y: 70,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.9,ease:[0,.95,1,1],duration:1.5}}>Crafted with a deep respect for the earth and its patterns, the people and their persistence, the beans and their energy.</motion.h1>
          </div>
          <div onClick={scrollEvent} className="scroll"><h6>scroll down</h6></div>
          
        </motion.div>
    )
}

export default Hero
