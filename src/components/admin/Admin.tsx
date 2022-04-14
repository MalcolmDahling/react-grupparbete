import axios from 'axios';
import { useEffect, useState } from 'react';
import './Admin.scss';

export function Admin(){

    class GetBookings{    
        constructor (
        public _id: string,
        public restaurantId: string,
        public date: Date,
        public time: string,
        public numberOfGuests: number,
        public customerId: string
        )
    {}}

    const [Data, setData] = useState<GetBookings[]>([])

    // hämtar Api
    useEffect(() => {
        axios
        .get('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624abc41df8a9fb11c3ea8b6')
        .then(res => {
            //console.log('GEtting from API', res.data);
            setData(res.data)
        }).catch(err => console.log('Det blev fel'));
    }, [])


    // tar bort från Api
    const Delete = (id: string) => {
      axios.delete(`https://school-restaurant-api.azurewebsites.net/booking/delete/${id}`)
      .then(res => {
          console.log('Deleted', res);
      }).catch(err => console.log(err))
    }

    // skriver ut Api i HTML
    const Api = Data.map((data) => {
        return(
            <table className='box' key={data._id}>
                <tbody>
            <tr className='box' key={data._id}>
                <td>{data.customerId}</td>
                <td>{data.time}</td>
                <td>{data.date}</td>
                <td>{data.numberOfGuests}</td>
                <td><button onClick={()=>Delete(data._id)}>Ta bort</button></td>
            </tr>
            </tbody>
            </table>
        )
    });


    return(
        <>
        <form>
            <label htmlFor="firstname">Namn:</label>
            <input type="text" name='firstname' />

            <label htmlFor="lastname">Efternamn:</label>
            <input type="text" name='lastname'/>

            <label htmlFor="email">Email:</label>
            <input type="text" name='email'/>

            <label htmlFor="tel">Telefon:</label>
            <input type="text" name='tel'/>
           
            <label htmlFor="amount">Antal:</label>
            <input type="number" name='amount'/>

            <label htmlFor="date">Antal:</label>
            <input type="date" name='date'/>
           
            <label htmlFor="time">Antal:</label>
            <input type="time" name='time'/>

        </form>

            {Api}
        </>
    );
}