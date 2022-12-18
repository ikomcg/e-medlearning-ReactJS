import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home'

import BreastCancer from './Pages/HealthyTopics/BreastCancer'

import GutHealth from './Pages/Plan/GutHealth'
import MindfulEating from './Pages/Plan/MindfulEating'
import MoodFoods from './Pages/Plan/MoodFoods'
import MoveYourBody from './Pages/Plan/MoveYourBody'
import SugarSavy from './Pages/Plan/SugarSavy'

const App = () => {
  return (
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/breast cancer' element={<BreastCancer/>}/>
                <Route path='/mindful eating' element={<MindfulEating/>}/>
                <Route path='/sugar savvy' element={<SugarSavy/>}/>
                <Route path='/move your body' element={<MoveYourBody/>}/>
                <Route path='/gut health' element={<GutHealth/>}/>
                <Route path='/mood foods' element={<MoodFoods/>}/>

              </Route>
            </Routes>
          </BrowserRouter>
  )
}

export default App