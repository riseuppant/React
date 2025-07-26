//Good practice if we return js then file should have .js syntax
//You can also use existing hooks to create new ones 
//Basically hooks functions hi hote hai
import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{res.json()
        })
        .then((res)=>setData(res[currency]))
    },[currency])
    
    console.log(data)
    return data
}

export default useCurrencyInfo