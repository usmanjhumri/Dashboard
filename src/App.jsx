import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './commonComponents/SideBar/SideBar'
import Home from './component/Home/Home'
import TodayRide from './component/Today\'s Ride/TodayRide'
import Drafts from './component/Drafts/Drafts'
import PastRides from './component/Past Rides/PastRides'
import AwaitingPickup from './component/AwaitingPickup/AwaitingPickup'
import Inprogress from './component/Inprogress/Inprogress'
import Completed from './component/Completed/Completed'
import Upcoming from './component/Upcoming/Upcoming'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SideBar childComponent={<Home />} />} />
          <Route path='/futurerides' element={<SideBar childComponent={<TodayRide />} />} />
          <Route path='/drafts' element={<SideBar childComponent={<Drafts />} />} />
          <Route path='/pastrides' element={<SideBar childComponent={<PastRides />} />} />
          <Route path='/awaitingpickup' element={<SideBar childComponent={<AwaitingPickup />} />} />
          <Route path='/inprogress' element={<SideBar childComponent={<Inprogress />} />} />
          <Route path='/completed' element={<SideBar childComponent={<Completed />} />} />
          <Route path='/upcoming' element={<SideBar childComponent={<Upcoming />} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
