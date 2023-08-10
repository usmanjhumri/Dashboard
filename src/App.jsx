import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './commonComponents/SideBar/SideBar'
import Home from './component/Home/Home'
import TodayRide from './component/Today\'s Ride/TodayRide'
import Drafts from './component/Drafts/Drafts'
import PastRides from './component/Past Rides/PastRides'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SideBar childComponent={<Home />} />} />
          <Route path='/futurerides' element={<SideBar childComponent={<TodayRide />} />} />
          <Route path='/drafts' element={<SideBar childComponent={<Drafts />} />} />
          <Route path='/pastrides' element={<SideBar childComponent={<PastRides />} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
