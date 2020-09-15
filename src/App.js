import React, { useState,useEffect } from 'react'
import './App.scss'
import Home from './pages/home'
import About from './pages/about'
import Shop from './pages/shop'
import {Switch, Route, withRouter} from 'react-router-dom'
import MenuSidebar from './components/menusidebar'
import Menu from './components/Menu'
import Productdetails from './pages/Productdetails'
import { AnimatePresence, motion } from 'framer-motion'
import { D } from './Data'





function App({history}) {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(["Low", "High"]);

  let openmenu = () => (setOpen(!open));

  const [products, setProducts] = useState([]);

    
  useEffect(() => {
    setProducts(D)
    const unlisten = history.listen(()=>{setOpen(false);
      setTimeout(function () {
        window.scrollTo(0,0)
      }, 1600)
    });
    return () => {
      unlisten()}   
  },[]);


  if(open === true){
    document.documentElement.style = "overflow-y: hidden!important";
  } 
  else {
    document.documentElement.style = "overflow-y: unset";
  }
  


 let sortItems = (index) => {
   if (index=== "High") {let items = [...products].sort((a,b) => a.price > b.price ? -1: 1);
    setProducts(items)};

   if (index=== "Low") {let items = [...products].sort((a,b) => a.price < b.price ? -1: 1)
    setProducts(items)
   } 
 }
 
 //console.log(sort)

  return (
    <>
      <motion.div initial={{width: "100%" }} transition={{delay:0.4,ease:[0,.85,0.6,1],duration:1.1}} animate={{width:"0%"}} exit={{width:"100%"}} className="show"></motion.div>
    <Menu onClick={openmenu} open={open} ></Menu>
    <Menu onClick={openmenu} open={open} ></Menu>
      <MenuSidebar open={open} ></MenuSidebar>
      <Route render={({location}) => (
        <AnimatePresence initial={true} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
             <Route exact path='/'  render={()=> (<Home products={products} sort={sort} sortItems={sortItems} />)}></Route>
             <Route exact path='/about'  component ={About}></Route>
             <Route exact path='/shop'  render={()=> (<Shop products={products} sortItems={sortItems} sort={sort} />)}></Route>
             <Route exact path='/shop/:id'  render = {(props)=>  (<Productdetails {...props} products={products} />)}></Route>
          </Switch>
        </AnimatePresence>
      )}>
      </Route>
    </>
  );
}

export default withRouter(App);
