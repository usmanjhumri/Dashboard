
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './commonComponents/SideBar/SideBar'
import Home from './component/Home/Home'
import TodayRide from './component/Today\'s Ride/TodayRide'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SideBar childComponent={<Home />} />} />
          <Route path='/one' element={<SideBar childComponent={<TodayRide />} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
