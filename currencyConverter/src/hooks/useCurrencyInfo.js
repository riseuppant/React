//Good practice if we return js then file should have .js syntax
//You can also use existing hooks to create new ones 
//Basically hooks functions hi hote hai
import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{
        
    },[])

}

