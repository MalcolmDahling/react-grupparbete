import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import './Admin.scss';

export function Admin(){

    // Används för att ta bort från Api
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

    // Används för att push till Api
    interface IBooking{
        restaurantId:string;
        date:string;
        time:string;
        numberOfGuests:number;
    }
    
    interface ICustomer{
        name:string;
        lastname:string;
        email:string;
        phone:string;
    }
    
    interface IPost{
        restaurantId:string;
        date:string;
        time:string;
        numberOfGuests:number;
    
        customer:ICustomer;
    }

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
            <div key={data._id}>
                
            <tr className='box' key={data._id}>
                <td>{data.customerId}</td>
                <td>{data.time}</td>
                <td>{data.date}</td>
                <td>{data.numberOfGuests}</td>
                <td><button onClick={()=>Delete(data._id)}>Ta bort</button></td>
            </tr>
    
            </div>
        )
    });

    const [newBooking, setNewBooking] = useState<IBooking>({restaurantId:'624abc41df8a9fb11c3ea8b6', date:'', time:'', numberOfGuests:1});
    const [newCustomer, setNewCustomer] = useState<ICustomer>({name:'', lastname:'', email:'', phone:''});
    const [post, setPost] = useState<IPost>();

    // använder oss av inputs values
    function handleBooking(e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){

        let name:string = e.target.name;

        if(name == 'name' || name == 'lastname' || name == 'email' || name == 'phone'){
            setNewCustomer({...newCustomer, [name]: e.target.value});
        }
        else{
            if(name == 'numberOfGuests'){
                setNewBooking({...newBooking, [name]: parseInt(e.target.value)});
            }
            else{
                setNewBooking({...newBooking, [name]: e.target.value});
            }
        }
    }

    // Gör en post som vi kan skicka till Api
    useEffect(() => {
        setPost({
            restaurantId:'624abc41df8a9fb11c3ea8b6',
            date:newBooking.date,
            time:newBooking.time,
            numberOfGuests:newBooking.numberOfGuests,
            customer:newCustomer
        });  
    }, [newBooking, newCustomer]);

    useEffect(() => {
    }, [post]);

    // Pushar post som gjorts innan till Api
    function sendToApi(){
        axios.post<IPost>('https://school-restaurant-api.azurewebsites.net/booking/create', post)
        .then(res => {
            console.log(res);   
        }).catch(err => {
            console.log(err, 'Du har INTE beställt');
        });
    }

    return(
        <>
        <form>
            <label htmlFor="name">Namn:</label>
            <input type="text" name='name' onChange={handleBooking}/>

            <label htmlFor="lastname">Efternamn:</label>
            <input type="text" name='lastname' onChange={handleBooking}/>

            <label htmlFor="email">Email:</label>
            <input type="text" name='email' onChange={handleBooking}/>

            <label htmlFor="phone">Telefon:</label>
            <input type="text" name='phone' onChange={handleBooking}/>
           
            <label htmlFor="numberOfGuests">Antal:</label>
            <input type="number" name='numberOfGuests'onChange={handleBooking}/>

            <label htmlFor="date">datum:</label>
            <input type="date" name='date' onChange={handleBooking}/>
           
            <label htmlFor="time">tid:</label>
            <input type="time" name='time' onChange={handleBooking}/>
        </form>

        <button onClick={sendToApi}>Send</button>

            {Api}
        </>
    );
}