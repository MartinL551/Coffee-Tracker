import Image from 'next/image'
import OtherCofeeIcon from "../../public/Imgs/other-coffee.png";

interface dataConfig {
    count: number;
}


export default function CountAnimated({ count } : dataConfig){

    let countQuotientArray = []
    let longCount = false; 
    let countRemainder;
    let tallyNo = 5

    if (count > 100){
        countRemainder = count - 100;
        count = 100
        longCount = true
    }

    

    if(count > 59){
        tallyNo = 10
    }

    let countQuotient = Math.floor(count/tallyNo)
    let countMod = count % tallyNo;

    
    
    for(let i = countQuotient; i >= 1; i --){
        console.log(countQuotient)
        countQuotientArray.push(i)
    }


    console.log(countQuotientArray)

    if(countQuotient === 0 && countMod === 0){
        countMod = -1;
    }



    return (
        <div className='grid md:grid-cols-10 grid-cols-4 lg:grid-cols-12'>
            {
                countQuotientArray.map( (quotientNo, index) => {


                    return(
                        <div key={index} className=''>
                            <Image src={OtherCofeeIcon} width={25}  alt="Add New Cofeee" />
                            <p>x{tallyNo}</p>
                        </div>
            
                    )

                })
            }
            {
                  
                    <div className=''>
                        {
                            countMod > 0 ? <Image src={OtherCofeeIcon} width={20}  alt="Add New Cofeee" /> : null
                        }
                        {
                            countMod > 0 ? <p>x{countMod}</p> : null
                        }
                        {
                            longCount && <p className='text-lg'>+{countRemainder}</p>
                        }
                    </div>
            }

            
        </div>
    )
}