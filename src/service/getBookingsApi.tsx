import axios from "axios";
import { useEffect, useState } from "react"
import { BookingId } from "../models/BookingId";

// hämta hem boking id från Api

export function GetBookings(){

    const [BookingIds, setInfo] = useState<BookingId[]>([])

    useEffect(() =>{
        axios
        .get<BookingId[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624abc41df8a9fb11c3ea8b6')
        .then(res =>{
            console.log(res.data);
            setInfo(res.data)
        })
    }, [])
}
