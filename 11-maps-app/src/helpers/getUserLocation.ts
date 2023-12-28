


export const getUserLocation = async ():Promise<[number, number]> => {
    
    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve([position.coords.latitude, position.coords.longitude]);
            },
            (error) => {
                alert('Error al obtener la ubicación del usuario');
                console.log(error);
                reject(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        
    });
};