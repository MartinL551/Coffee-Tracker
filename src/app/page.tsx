"use client";
import Image from 'next/image'
import CoffePlaceRow from './coffeePlaceRow'
import AddNewCoffeePlace from './addNewCoffeePlace';
import React, { useState, useEffect } from 'react';





 
interface coffeePlacesConfig extends Array<rowConfig>{}

interface rowConfig {
  name: string,
  googleAPILocation: string,
  coffeeData : coffeeConfig[]
}

interface coffeeConfig {
  name: string; 
  count: number;
}













export default function Home() {

    const  [coffeePlaces, setCoffeePlaces] = useState<coffeePlacesConfig>([])
  const [ showForm, setShowForm ] = useState<Boolean>(false)




  useEffect(() => {



        localStorage.setItem('coffeePlaces', JSON.stringify(coffeePlaces))


  }, [coffeePlaces])

    useEffect(() => {
        console.log("get",JSON.parse(localStorage.getItem("coffeePlaces")!) as coffeePlacesConfig);
        setCoffeePlaces(JSON.parse(localStorage.getItem("coffeePlaces")!) as coffeePlacesConfig);
    }, [])




  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-roboto text-coffee-green">
      <div className="w-full">
        <div className='w-3/4 m-auto items-center'>
          <h2 className='text-5xl w-full text-center mb-20'>Welcome! Track your coffees below!</h2>
          
         
          <div>
            {
              showForm && <AddNewCoffeePlace coffeePlaces={coffeePlaces} setShowForm={setShowForm} setCoffeePlaces={setCoffeePlaces} /> 
            }
          </div>
          
        </div>
        <div className='w-3/4 items-center m-auto'>
          {   
              coffeePlaces.length === 0 ? <div className="text-center"> No Coffee Places Added Currently</div> : coffeePlaces.map((place : rowConfig, index : number) =>{
                return (<CoffePlaceRow key={ index.toString()} index={ index }  name={place.name} googleAPILocation={place.googleAPILocation} coffeeData={place.coffeeData} coffeePlaces={coffeePlaces} setCoffeePlaces={setCoffeePlaces}/>)
              })
          }
        </div>
        <div className='flex justify-center mt-20 mt-1 mb-2'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative" onClick={ () => {setShowForm(true)} }>Add Coffee Place</button>
          </div>
      </div>
      <footer className='w-full bg-white text-center my-2'>
        <div>
          Enjoy! Copyright Martin Lever
        </div>
      </footer>
    </main>
  )
}
