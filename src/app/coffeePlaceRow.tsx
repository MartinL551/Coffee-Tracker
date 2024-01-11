import { useState } from "react";
import CoffeeCountRow from "./coffeeCountRow"
import UpdateCoffeePlace from './updateCoffeePlace';
import AddNewCoffeeType from "./addNewCofeeeType";
import Image from 'next/image'
import editIcon from "../../public/SVGs/edit.svg";
import deleteIcon from "../../public/SVGs/delete.svg";
import addNewCofeeIcon from "../../public/Imgs/other-coffee.png";

interface propsConfig {
    index: number,
    name: string,
    googleAPILocation: string,
    coffeeData : coffeeConfig[],
    coffeePlaces : coffeePlacesConfig,
    setCoffeePlaces: Function
}

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


export default function CoffePlaceRow({index, name, googleAPILocation, coffeeData, coffeePlaces,  setCoffeePlaces}: propsConfig) {
    
    let [showForm, setShowForm] = useState<Boolean>(false);
    let [showAddTypeForm, setShowAddTypeForm,] = useState<Boolean>(false);

    const deleteHandler = () => {
        let coffeePlacesNew = [...coffeePlaces];
        coffeePlacesNew.splice(index, 1)
        setCoffeePlaces(coffeePlacesNew)
    }

    const showModal = () => {
        setShowForm( true )
    }


    const showTypeModal = () => {
        setShowAddTypeForm( true )
    }


    return(
        <div className="bg-coffee-brown my-10 p-10 rounded-[2px] shadow-xl">
                <div>
                    <h4 className="text-coffee-yellow text-3xl mb-5">
                        {name} 
                    </h4>
                </div>
                 <div className="grid lg:grid-cols-[30%_60%_10%] sm:grid-cols-auto gap-3">
        
                
                    <div className="grid gap-0 auto-rows-auto" >
                        <div>
                        <iframe
                            className="w-full h-full min-h-[400px]"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyBv3MWlOl4XaE3meLVt9raaGxGb0ji3dL4&q=" + googleAPILocation}>
                        </iframe>
                    
                        </div>
                    </div>
                    <div className="">

                        {
                            coffeeData.map(( coffee, countIndex ) => {
                            
                                return (
                                <div key={ countIndex.toString() } className="grid border-2 border-coffee-green bg-coffee-green my-3 mx-1 rounded-[2px] shadow-xl">
                                    <CoffeeCountRow index={ index } countIndex={ countIndex } name={ coffee.name } count={ coffee.count } coffeePlaces={ coffeePlaces } setCoffeePlaces={ setCoffeePlaces } />

                                </div>
                                )
                            })
                        }
                    
                    </div>
                    <div className="mt-1">
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded w-full" onClick={ showModal }><Image src={editIcon} alt="Edit Place" width={0} height={0} style={{ width: '100%', height: '16px' }}/></button>
                            {
                            showForm && <UpdateCoffeePlace index={ index } coffeePlaces={coffeePlaces} setShowForm={ setShowForm } setCoffeePlaces={setCoffeePlaces} name={name} googleAPILocation={googleAPILocation} /> 
                            }
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded w-full" onClick={ deleteHandler }><Image src={deleteIcon} alt="Edit Place" width={0} height={0} style={{ width: '100%', height: '16px' }}/></button>

                        </div>
                        <div>
                        </div>
                        <div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-sm px-2 my-2 rounded w-full text-center text-xl grid grid-cols-auto " onClick={ showTypeModal }>+<Image src={addNewCofeeIcon} alt="Add New Cofeee" className="place-self-center"/></button>
                            {
                            showAddTypeForm && <AddNewCoffeeType index={ index } coffeePlaces={ coffeePlaces } setCoffeePlaces={ setCoffeePlaces } setShowForm={ setShowAddTypeForm } /> 
                            }
                        </div>
                        

                        
                    </div>
           
           
                 </div>
            
        </div>
       
   
    )

}
