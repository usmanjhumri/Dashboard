
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './commonComponents/SideBar/SideBar'
import Home from './component/Home/Home'
import TodayRide from './component/Today\'s Ride/TodayRide'
import Drafts from './component/Drafts/Drafts'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<SideBar childComponent={<Home />} />} />
          <Route path='/futurerides' element={<SideBar childComponent={<TodayRide />} />} />
          <Route path='/drafts' element={<SideBar childComponent={<Drafts />} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
