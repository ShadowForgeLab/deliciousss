import React from 'react'
import Home from './Home'
import { Route,Routes ,useLocation } from 'react-router-dom'
import Recipe from './Recipe'
import Cuisine from './Cuisine'
import Searched from './Searched'
import { AnimatePresence  } from 'framer-motion'

function Pages() {
  const location=useLocation();
  return (
    <div>
      
      <AnimatePresence>
        <Routes Location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/searched/:search' element={<Searched/>}/>
          <Route path='/recipe/:name' element={<Recipe/>}/>
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default Pages
