import { useEffect, useState } from "react"
import { data } from "react-router"


const useFetchApp = ()=>{
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch('../apps.json')
        .then(res => res.json())
        .then(data=>{setApps(data);
        setLoading(false)})
        .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
        
    },[])
    return {apps, loading, error}
    
}

export default useFetchApp