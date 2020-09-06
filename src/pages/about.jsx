import React from 'react'
import Footer from '../components/footer'
import {motion} from 'framer-motion'

function about() {
    return (
        <>
        <motion.div className="show" initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:0.8}} animate={{width:"0%"}} exit={{width:"100%"}}></motion.div>
        <div className="about-section">
           <div className="container">
              <motion.h4 initial={{y: 30,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.7,ease:[0,.95,1,1],duration:1}}>Our Story</motion.h4>
              <motion.h1 initial={{y: 70,opacity:0}} animate={{y: 0,opacity:1}} transition={{delay:0.9,ease:[0,.95,1,1],duration:1.5}}>a short story in every cup</motion.h1>
              <div className="flex-container">
                <div className="leftside">
                    <p>If you want to make a good cup of coffee, make friends with the farmer. Trade stories, share meals. You’ll know which plants are doing well, you’ll see them yourself. Three thousand feet above the North Pacific on a third generation coffee farm in Kona, Hawaii, where the views alone are worth the forty minute flight from Oahu.</p>
                    <p>If you want to make a good cup of coffee, marry a food scientist, and become business partners. She’ll handle the roasting, and she’ll need a Probat. Put it together yourself, pipe by pipe, veins all over the building. Call it the heart of the roastery.</p>
                    <div className="image-container">
                      <div className="about-bg"></div>
                    </div>
                </div>
                <div className="rightside">
                    <p>Keep a sharp eye. Work with the detailed and diligent, those who have a deep respect for the craft. They’ll graft every coffee tree, taste every roast, time each espresso pull and report back with the daily average. Make sure the pastries are perfect and the cafe is sparkling. Treat them like family. The customers will feel it, and they’ll start to feel like family, too. Ua Kuluma Ke Kanaka I Ke Aloha*. It’s the Hawaiian way.</p>
                    <p>If you want to make the best cup of coffee - do all of these things. And aim to do more. This has worked well for Kona Coffee Purveyors’ Raymond and Jackie Suiter.</p>
                    <p>*Hawaiian proverb - It Is Natural For People To Behave In a Loving Way.</p>
                </div>
              </div>
              <div className="middle-part">
                 <div className="top">
                     <h3 className="title">One helpful volcano</h3>
                     <p className="text-right">If you want to make a good cup of coffee, marry a food scientist, and become business partners. She’ll handle the roasting, and she’ll need a Probat. Put it together yourself, pipe by pipe, veins all over the building. Call it the heart of the roastery.</p>
                 </div>
                 <div className="bottom">
                     <h3 className="title">A microclimate in the sky</h3>
                     <p className="text-right">The microclimate in Kona – sun every morning, clouds coming in like clockwork in the early afternoon – creates near perfect conditions for a great variety of things: bananas, vanilla, nuts, avocados, papaya, cacao and of course, coffee. The heat, shade, rainfall, and elevation allow the coffee cherries to flourish, producing a rich and complex flavor – full of fruit, sweetness and vitality – that’s completely unique to Kona.</p>
                 </div>
              </div>
           </div>
           <Footer></Footer>
        </div>
        </>
    )
}

export default about
