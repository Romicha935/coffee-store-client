import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
const coffees = useLoaderData();

  return (
    <div className='m-20'>
      
          <h1 className='text-6xl text-center  text-purple-600 my-20'>Hot Hot Cold Coffee: {coffees.length}</h1>
         <div className='grid md:grid-cols-2 mt-5 gap-4'>
         {
            coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
         </div>
    </div>
  )
}

export default App
