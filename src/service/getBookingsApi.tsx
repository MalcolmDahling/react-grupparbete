import axios from "axios";
import { useEffect, useState } from "react"
import { BookingId } from "../models/BookingId";
import { IbookingId } from "../models/IbookingId";

// hämta hem boking id från Api
export const getBookingsApi = () => {

    const [BookingIds, setBookingids] = useState<BookingId[]>([])
    
   useEffect(() =>{
    axios
    .get<IbookingId[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624abc41df8a9fb11c3ea8b6')
    .then(response => {
        let GetBookingIdsFromApi = response.data.map((bookingId:IbookingId) =>{
            return new BookingId(
                bookingId.id,
                bookingId.restaurantId,
                bookingId.date,
                bookingId.time,
                bookingId.numberOfGuests,
                bookingId.customerId)
        });
        setBookingids(GetBookingIdsFromApi)
    })
   }, []);

   // skriv ut i webbläsaren
   let BookingIdsHtml = BookingIds.map((bookingId: BookingId)=>{

    console.log(bookingId);
    
       return (
           <div>
               {BookingIdsHtml}
           </div>
       )
   })

}