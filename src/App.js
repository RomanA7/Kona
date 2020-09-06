import React, { useState,useEffect } from 'react'
import './App.scss'
import Home from './pages/home'
import About from './pages/about'
import Shop from './pages/shop'
import {Switch, Route, withRouter} from 'react-router-dom'
import MenuSidebar from './components/menusidebar'
import Menu from './components/Menu'
import Productdetails from './pages/Productdetails'
import { AnimatePresence, motion } from "framer-motion";




function App({history}) {
  const [open, setOpen] = useState(false);
  let openmenu = () => (setOpen(!open));
    
  useEffect(() => {
    const unlisten = history.listen(()=>{setOpen(false);
      setTimeout(function () {
        window.scrollTo(0,0)
      }, 1600)
    });
    return () => {
      unlisten();
    }

  },[]);


  if(open === true){
    document.body.style.overflow = 'hidden';
  } 
  else {
    document.body.style.overflow = 'unset';
  }  
  
  

  return (
    <>
      <motion.div initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:1.1}} animate={{width:"0%"}} exit={{width:"100%"}} className="show"></motion.div>
    <Menu onClick={openmenu} open={open} ></Menu>
    <Menu onClick={openmenu} open={open} ></Menu>
      <MenuSidebar open={open} ></MenuSidebar>
      <Route render={({location}) => (
        <AnimatePresence initial={true} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
             <Route exact path='/'  component ={Home}></Route>
             <Route exact path='/about'  component ={About}></Route>
             <Route exact path='/shop'  component ={Shop}></Route>
             <Route exact path='/shop/:id'  component ={Productdetails}></Route>
          </Switch>
        </AnimatePresence>
      )}>
      </Route>
    </>
  );
}

export default withRouter(App);
