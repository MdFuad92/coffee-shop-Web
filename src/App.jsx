import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeData from './components/CoffeeData/CoffeeData'

function App() {

const coffeLoader = useLoaderData()
const [coffees, setCoffees] = useState(coffeLoader)
  return (
    <div className='m-20'>
      
      <h1 className='text-3xl font-extrabold'>Coffee{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
         coffees.map(coffee => <CoffeeData key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}  ></CoffeeData> )
      }
      </div>
   
     
    </div>
  )
}

export default App
