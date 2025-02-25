import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [value,setValue] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setValue(res[currency]))
    },[currency])
    return value;
}

export default useCurrencyInfo;