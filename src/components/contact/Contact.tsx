import axios from 'axios';
import { useEffect, useState } from 'react';
import { GetRestaurantApi } from '../../models/GetRestaurantApi';
import './Contact.scss';

export function Contact(){

    
    const [Data, setData] = useState<GetRestaurantApi[]>([])

    // kör Api när app laddas
    useEffect(() => {
        axios
        .get('https://school-restaurant-api.azurewebsites.net/restaurant/624abc41df8a9fb11c3ea8b6')
        .then(res => {
            console.log('Getting from API', res.data);
           setData(res.data)
        }).catch(err => console.log(err))
    }, []);

    // skirv ut till webbläsaren med hjälp av maps
    const RestaurantInfo = Data.map((data) =>{
        return (<>
            <h1>{data.name}</h1>
            <p>{data.address}</p>
            <p>{data.zip}</p>
            <p>{data.city}</p>
        </>)
    })

    return(
        <>
        {RestaurantInfo}
        </>
    );
}