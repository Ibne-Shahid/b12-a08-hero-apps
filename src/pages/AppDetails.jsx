import { useEffect, useState } from 'react'
import {  useParams } from 'react-router'
import Swal from 'sweetalert2'
import useFetchApp from '../hooks/useFetchApps';
import AppDetailsComponent from '../components/AppDetailsComponent';
import Loader from '../components/Loader';
import Error from './Error';


const AppDetails = () => {
    const [isClicked, setIsClicked] = useState(false)
    const { id } = useParams()
    const { apps, loading, error } = useFetchApp()

    const app = apps.find(a => String(a.id) === String(id))
    console.log(app?.image);




    const handleInstall = () => {
        setIsClicked(true)
        Swal.fire({
            title: "This app is installed!",
            icon: "success"
        });
    }


    return (
        <div>
            {loading? <Loader></Loader> : error|| apps.length <=0 ? <Error></Error> : <AppDetailsComponent app={app} handleInstall={handleInstall} isClicked={isClicked}></AppDetailsComponent>}
        </div>
    )
}

export default AppDetails