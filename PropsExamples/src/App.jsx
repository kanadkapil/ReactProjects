import { useState } from 'react'
import './App.css'
import Table from './component/Table'
import Carousel from './component/Carousel'
import Timeline from './component/Timeline'
import CardList from './component/CardList'
import Profile from './component/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cyan-800 py-10'>

      <div className="container mx-auto justify-center">
        <div className="my-10">
          <Table />
        </div>
        <div className="my-5">
          <Carousel />
        </div>
        <div className="my-5">
          <Timeline />
        </div>
        <div className="my-5 flex justify-center sm:justify-around mx-auto">
          <CardList />
        </div>
        <div className="my-5">
          <div class="my-5 gap-4 grid sm:grid-cols-12 grid-cols-1">
            <div
              class="min-h-[860px] rounded-lg shadow-lg bg-violet-200 bg-opacity-20 backdrop-blur-3xl sm:col-span-4 p-4 flex flex-col overflow-y-auto">
              <Profile />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
