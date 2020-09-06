import React from 'react'
import Hero from '../components/Hero'
import Story from '../components/Story'
import Products from '../components/products'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

function Home() {
    return (
        <div>
          <motion.div className="show" initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:0.8}} animate={{width:"0%"}} exit={{width:"100%"}}></motion.div>
          <Hero></Hero>
          <Story></Story> 
          <Products></Products>
          <Footer></Footer>
        </div>       
    )
}

export default Home;
