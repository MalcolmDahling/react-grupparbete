import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Contact } from './components/contact/Contact';
import { Booking } from './components/booking/Booking';
import { NotFound } from './components/notFound/NotFound';
import { Layout } from './components/layout/Layout';
import { Admin } from './components/admin/Admin';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>} />
                    <Route path="/admin" element={<Admin></Admin>} />
                    <Route path="/booking" element={<Booking></Booking>} />
                    <Route path="/contact" element={<Contact></Contact>} />
                    <Route path="*" element={<NotFound></NotFound>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

