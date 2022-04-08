import axios from "axios";
import { useEffect } from "react"

// hämta hem boking id från Api

export function GetBookings(){
    useEffect(() =>{
        axios
        .get('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624abc41df8a9fb11c3ea8b6')
        .then(res =>{
            console.log(res.data);
            res.data
        })
    })
}
