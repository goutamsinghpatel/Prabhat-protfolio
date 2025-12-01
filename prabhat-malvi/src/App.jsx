
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

import Wedding_shoot from './pages/Wedding_shoot'
import Reels from './pages/Reels'
import PreWedding from './pages/PreWedding'
import Modeling from './pages/Modeling'


import BookingPage from './pages/BookingPage'
import PageNotFound from './pages/PageNotFound'
function App() {
  

  return (
<>

 <Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<Home/>}/>
    <Route path="/wedding-shoot" element={<Wedding_shoot/>}/>
  <Route path="/Pre-Wedding" element={<PreWedding/>}/>
  <Route path="/reels" element={<Reels/>}/>
    <Route path="/modeling" element={<Modeling/>}/>
<Route path="/Booking" element={<BookingPage/>}/>
 <Route path='/*' element={<PageNotFound/>}/>


</Routes> 


    </>
  )
}

export default App
