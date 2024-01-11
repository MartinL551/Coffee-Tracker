import CountAnimated from './countAnimated'

interface propsConfig {
    index: number,
    countIndex: number,
    name: string,
    count: number,
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

export default function CoffeeCountRow( { index, countIndex, name, count, coffeePlaces, setCoffeePlaces  } : propsConfig) {

    const countUpHandler = () => {
        let coffeePlacesNew = [...coffeePlaces]
        let coffeeDataVals = coffeePlacesNew[index].coffeeData[countIndex]
        if(coffeeDataVals.count >= 0){
            coffeeDataVals.count ++
        }
          
        coffeePlacesNew[index].coffeeData[countIndex] = coffeeDataVals;
        setCoffeePlaces(coffeePlacesNew)
    }

    const countDownHandler = () => {
        let coffeePlacesNew = [...coffeePlaces]
        let coffeeDataVals = coffeePlacesNew[index].coffeeData[countIndex]


        console.log(coffeeDataVals.count)
        if(coffeeDataVals.count >= 1){
            coffeeDataVals.count --
        }
        
        coffeePlacesNew[index].coffeeData[countIndex] = coffeeDataVals;
        setCoffeePlaces(coffeePlacesNew)
    }

    const deleteCountRow = () => {
        let coffeePlacesNew = [...coffeePlaces]
        coffeePlacesNew[index].coffeeData.splice(countIndex, 1)
        setCoffeePlaces(coffeePlacesNew)
       
    }
    
   return (

    <div className="mx-5 my-1 text-white">
         <div className="place-self-center my-4 py-1 text-xl bg-coffee-yellow w-min px-1 text-coffee-green rounded-[2px] shadow-xl">
                {name}
         </div>
         <div className="grid md:grid-cols-[80%_20%] grid-cols-auto">
           
            <div className="">
               <CountAnimated count = {count} />
                
            </div>
            <div>
                <div>
                    Total: {count}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 mx-1 rounded md:w-[25px]  text-center w-full mt-3" onClick={ countUpHandler }>+</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 mx-1 rounded md:w-[25px]  text-center w-full mt-3" onClick={ countDownHandler }>-</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-2 mx-1 rounded md:w-[25px]  text-center w-full mt-3" onClick={ deleteCountRow }>X</button>
            </div>
            

    </div>
    </div>

     

   )
}