import axios from 'axios';
import { ChangeEvent, ReactElement, useState } from 'react';
import { useEffect } from 'react';
import './Booking.scss';

interface IDateArray{
    date:string;
    numBookings18:number;
    numBookings21:number;
}

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




export function Booking(){

    const [dateArray, setDateArray] = useState<IDateArray[]>([]);
    const [avaliableDates, setAvaliableDates] = useState<ReactElement[]>([]);
    const [avaliableTime18, setAvaliableTime18] = useState<ReactElement>();
    const [avaliableTime21, setAvaliableTime21] = useState<ReactElement>();
    let today = new Date();

    const [noAvaliableTime, setNoAvaliableTime] = useState(<></>);


    //populate dateArray
    if(dateArray[0] == null){

        let arr:IDateArray[] = [];

        for(let i = 0; i < 30; i++){

            arr.push({
                date: new Date( new Date().setDate(today.getDate() +i) ).toLocaleDateString(),
                numBookings18: 0,
                numBookings21: 0
            });   
        }

        setDateArray(arr);
    }
    



    useEffect(() => {
        axios.get<IBooking[]>('https://school-restaurant-api.azurewebsites.net/booking/restaurant/624abc41df8a9fb11c3ea8b6')
        .then(response => {
                
            for(let i = 0; i < response.data.length; i++){

                for(let j = 0; j < dateArray.length; j++){

                    if( dateArray[j].date == response.data[i].date && response.data[i].time == "18:00" ){

                        let arr:IDateArray[] = dateArray;
                        arr[j].numBookings18 =+1;
                        setDateArray(arr);
                    }

                    if( dateArray[j].date == response.data[i].date && response.data[i].time == "21:00" ){

                        let arr:IDateArray[] = dateArray;
                        arr[j].numBookings21 =+1;
                        setDateArray(arr);
                    }
                }
            }

            setAvaliableDates(
                dateArray.map((date, i) => {
                    return( <option key={i} value={date.date}>{date.date}</option> );
                })
            );

        });

    }, []);






    

    //########## FORM ##########
    //########## FORM ##########
    //########## FORM ##########

    function handleChangeDay(e:ChangeEvent<HTMLSelectElement>){

        handleChangeBooking(e);

        setAvaliableTime18(<></>);
        setAvaliableTime21(<></>);
        setNoAvaliableTime(<></>);
        
        for(let i = 0; i < dateArray.length; i++){

            if(dateArray[i].date == e.target.value){
                
                if(dateArray[i].numBookings18 < 16){
                    setAvaliableTime18(<option value="18:00">18:00</option>);
                }

                if(dateArray[i].numBookings21 < 16){
                    setAvaliableTime21(<option value="21:00">21:00</option>);               
                }

                if(dateArray[i].numBookings18 > 15 && dateArray[i].numBookings21 > 15)
                {
                    setNoAvaliableTime(<p className="error">No avaliable times this date.</p>);
                }
            }
        }
    }



    const [newBooking, setNewBooking] = useState<IBooking>({restaurantId:'624abc41df8a9fb11c3ea8b6', date:'', time:'', numberOfGuests:0});
    const [newCustomer, setNewCustomer] = useState<ICustomer>({name:'', lastname:'', email:'', phone:''});
    const [post, setPost] = useState<IPost>();

    function handleChangeBooking(e:ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>){

        let name:string = e.target.name;

        if(name == "name" || name == "lastname" || name == "email" || name == "phone"){
            setNewCustomer({...newCustomer, [name]: e.target.value});
        }

        else{
            setNewBooking({...newBooking, [name]: e.target.value});
        }
    }


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
        console.log(post);
    }, [post]);





    function postBooking(){
        axios.post<IPost>('https://school-restaurant-api.azurewebsites.net/booking/create', post)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
            
        });
    }

    //########## FORM ##########
    //########## FORM ##########
    //########## FORM ##########



    
    return(
        <>
            <form>
                <p>Select day:</p>
                <select name="date" onChange={handleChangeDay} /*AND handleChangeBooking*/ defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disabled>Select a day</option>
                    {avaliableDates}
                </select>


                <p>Avaliable times:</p>
                <select name="time" defaultValue={"DEFAULT"} onChange={handleChangeBooking}>
                    <option value="DEFAULT" disabled>Select time</option>
                    {avaliableTime18}
                    {avaliableTime21}
                </select>

                {noAvaliableTime}

                <p>Number of people (1-6):</p>
                <input type="number" name="numberOfGuests" onChange={handleChangeBooking} required max={6} min={0} placeholder="0"></input>

                <p>Firstname:</p>
                <input type="text" name="name" onChange={handleChangeBooking} required placeholder="Firstname"></input>

                <p>Lastname:</p>
                <input type="text" name="lastname" onChange={handleChangeBooking} required placeholder="Lastname"></input>

                <p>Email:</p>
                <input type="email" name="email" onChange={handleChangeBooking} required placeholder="Email"></input>

                <p>Phone:</p>
                <input type="phone" name="phone" onChange={handleChangeBooking} required placeholder="Phone"></input>

                <input type="button" name="submitBooking" onClick={postBooking} value="Reserve Table"></input>
            </form>
        </>
    );
}




