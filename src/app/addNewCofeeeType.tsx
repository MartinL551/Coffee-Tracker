import { useState } from "react";
import AddNewCoffeePlace from "./addNewCoffeePlace";

interface dataConfig {
    setCoffeePlaces : Function,
    setShowForm : Function,
    coffeePlaces : rowConfig[],
    index : number,
}


interface rowConfig {
    name: string,
    googleAPILocation: string,
    coffeeData : coffeeConfig[]
  }
  

interface coffeeConfig {
    name: string; 
    count: number;
}




export default function AddNewCoffeeType( { index, coffeePlaces, setCoffeePlaces, setShowForm } : dataConfig) {

   let types = ["Cappuccino", "Latte", "Espresso"]

   

    if( coffeePlaces[index].coffeeData.length > 0 ){
         for(let i = 0; i < coffeePlaces[index].coffeeData.length; i++){
            for(let j = 0; j < types.length; j++){
                if(types[i] === coffeePlaces[index].coffeeData[i].name){
                    types.splice( j , 1)
                }
            }
        }
    }


    
   


    const selectHandler = ( event : React.ChangeEvent<HTMLSelectElement> ) =>{ 
        event.preventDefault()
        let type = event.target.value;
        let newCoffeePlaces = [...coffeePlaces]

        let newCoffeeType = {
            name: type,
            count: 0,
        }

        newCoffeePlaces[index].coffeeData.push(newCoffeeType)

        setCoffeePlaces(newCoffeePlaces)
        setShowForm(false)
    
    }

    return (
        <div id="defaultModal"  aria-hidden="true" className="w-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={ () => {setShowForm(false)} }>Close Form</button>
              
                    <ul className="m-3">
                        <li className="grid w-full" >
                            <label htmlFor="type" className="w-full">Type</label>
                            <select className="w-full"  onChange={ selectHandler } name="type" id="select_type">
                            <option defaultValue="true" className="w-full break-words w-full">
                                 Select Type of Coffee
                            </option>
                                {
                                    types.map( ( type, index ) => {
                                        return (
                                            <option key={index}>
                                                {type}
                                            </option>
                                        )
                                    })
                                }

                            <option value="Other">Other</option>
                            </select>   
                        </li>
                    </ul>
              
            </div>
          
        </div>
    )
}