import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeData from './components/CoffeeData/CoffeeData'

function App() {

const coffeLoader = useLoaderData()
  return (
    <div className='m-20'>
      
      <h1 className='text-3xl font-extrabold'>Coffee{coffeLoader.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
         coffeLoader.map(coffee => <CoffeeData key={coffee._id} coffee={coffee} ></CoffeeData> )
      }
      </div>
   
     
    </div>
  )
}

export default App
