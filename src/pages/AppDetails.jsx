import { useEffect, useState } from 'react'
import {  useParams } from 'react-router'
import Swal from 'sweetalert2'
import useFetchApp from '../hooks/useFetchApps';
import AppDetailsComponent from '../components/AppDetailsComponent';
import Loader from '../components/Loader';
import Error from './Error';


const AppDetails = () => {
    const { apps, loading, error } = useFetchApp()
    const [isClicked, setIsClicked] = useState(false)
    const { id } = useParams()
    

    const app = apps.find(a => String(a.id) === id)
    

    const handleInstall = () => {

        setIsClicked(true)
        Swal.fire({
            title: "This app is installed!",
            icon: "success"
        });

    }


    return (
        <div>
            {loading? <Loader></Loader> : error|| !app ? <Error></Error> : <AppDetailsComponent app={app} handleInstall={handleInstall} isClicked={isClicked}></AppDetailsComponent>}
        </div>
    )
}

export default AppDetails