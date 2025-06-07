import { useState } from 'react'
import './App.css'
import Table from './component/Table'
import Carousel from './component/Carousel'
import Timeline from './component/Timeline'
import CardList from './component/CardList'

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
        <div className="my-5">
          <CardList />
        </div>
      </div>


    </div>
  )
}

export default App
