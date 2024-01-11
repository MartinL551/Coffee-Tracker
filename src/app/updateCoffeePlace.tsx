


interface dataConfig {
    index : number,
    setCoffeePlaces : Function;
    setShowForm : Function;
    coffeePlaces : rowConfig[],
    name : string,
    googleAPILocation : string,
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


export default function UpdateCoffeePlace( { index, coffeePlaces, setCoffeePlaces, setShowForm, name, googleAPILocation } : dataConfig) {

    let vanityName = name
    let googleAPIArray = googleAPILocation.split(",")
    let placeName = googleAPIArray[0]
    let street = googleAPIArray[1]
    let city = googleAPIArray[2]

    
    const formHandler = ( event : React.FormEvent<HTMLFormElement> ) =>{ 
        event.preventDefault()
        let name = event.target[0].value;
        let placeName = event.target[1].value;
        let street = event.target[2].value
        let city = event.target[3].value

        let coffeePlacesNew = [...coffeePlaces]
        console.log("coffeePlaces", index)

        if( name === null || name === undefined || name === ""){
            alert("Please Enter A Valid Name")
            return
        }

        if( placeName === null || placeName === undefined || placeName === ""){
            alert("Please Enter A Valid Place Name")
            return
        }


        if( city === null || city === undefined || city === ""){
            alert("Please Enter A Valid City")
            return
        }

    
       coffeePlacesNew[index].name = name;
       coffeePlacesNew[index].googleAPILocation = `${placeName},${street},${city}`

       setCoffeePlaces(coffeePlacesNew)
       setShowForm ( false )
        
     

        
    }

    return (
        <div id="defaultModal"  aria-hidden="true" className="fixed w-fit z-50 p-4 overflow-x-hidden overflow-y-auto max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={ () => {setShowForm(false)} }>Close Form</button>
                <form action="" onSubmit={( event ) => formHandler( event )} className="grid">
                    <ul className="m-3">
                        <li className="grid grid-col-2">
                            <label htmlFor="vanity_name">Vanity Name</label>
                            <input type="text" className="border-2 " id="vanity_name" defaultValue={vanityName} />
                        </li>
                        <li className="grid grid-col-2">
                            <label htmlFor="text" id="place_name">Place Name</label>
                            <input type="text" className="border-2 " id="place_name" defaultValue={placeName} />
                        </li>
                        <li className="grid grid-col-2">
                            <label htmlFor="street">Street</label>
                            <input type="text" className="border-2 " id="street" defaultValue={street}  />
                        </li>
                        <li className="grid grid-col-2">
                            <label htmlFor="city_name">City/Town</label>
                            <input type="text" className="border-2 " id="city_name" defaultValue={city} />
                        </li>
                    </ul>
                    
                    
                    
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded just">Submit</button>
                </form>
            </div>
          
        </div>
    )
}