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
        return (
        <div key={data.name}>
            <h1>{data.name}</h1>
            <p> Adress: <br></br>{data.address}<br></br> {data.zip}, {data.city}</p>
            <p>tel: 000- 000 00 00</p>
    </div>
        )
    })

    return(
        <>
        <p className="Contact-Title">Kontakt</p>
        <br></br>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/e8/9b/44/blue-bar.jpg" className="Contact-Picture"/>
        <h1 className="Contact-text"> {RestaurantInfo}</h1>
        
        </>
    );
}