const getItem = ()=>{

    const installedApps = localStorage.getItem('installedApps')

    try {
        const data = installedApps ? JSON.parse(installedApps) : [];
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }

}

const setItem = (id)=>{

    const installedAppsData = getItem();

    if (installedAppsData.includes(String(id))) {
        alert('already exist')
    } else {
        installedAppsData.push(String(id))
        localStorage.setItem('installedApps', JSON.stringify(installedAppsData));

    }

}

const removeItems = (id)=>{

    const installedAppsData = getItem();
    
    const filteredItems = installedAppsData.filter(appId=> appId !== String(id))
    localStorage.setItem('installedApps', JSON.stringify(filteredItems));
}

export {setItem, getItem, removeItems}