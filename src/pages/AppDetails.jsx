import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'
import useFetchApp from '../hooks/useFetchApps';
import AppDetailsComponent from '../components/AppDetailsComponent';
import Loader from '../components/Loader';
import AppError from './AppError';
import { getItem, setItem } from '../hooks/localStorage';


const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading, error } = useFetchApp()
    const [isClicked, setIsClicked] = useState(() => {
    const installedApps = getItem().map(String);
    return installedApps.includes(String(id));})


    const app = apps.find(a => String(a.id) === id)
    

    const handleInstall = (id) => {

        setIsClicked(true)
        Swal.fire({
            title: "This app is installed!",
            icon: "success"
        });

        setItem(id)

    }


    return (
        <div>
            {loading ? <Loader></Loader> : error || !app ? <AppError></AppError> : <AppDetailsComponent app={app} handleInstall={handleInstall} isClicked={isClicked}></AppDetailsComponent>}
        </div>
    )
}

export default AppDetails