import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Pages/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [ coffees, setCoffees ] = useState(loadedCoffees);

  return (
    <div className='text-center container mx-auto'>
      
      <h1 className='text-3xl font-bold'>All Coffees here: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-3'>
      {
        coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id}></CoffeeCard>)
      }
      </div>
      
      
    </div>
  )
}

export default App
