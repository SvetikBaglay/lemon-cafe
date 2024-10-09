

import '../App.css'
import './Main.css'
import { Routes, Route  } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingForm from './BookingForm';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import Delivery from './Delivery';
import Confirm from './Confirm';
import ConfirmedBooking from './ConfirmedBooking';
import LogInAccount from './LogInAccount';
import React, { useReducer, useState  } from "react";
import { useNavigate } from "react-router-dom";


export const initializeTimes = () => {
  const times = window.fetchAPI(new Date());
  return times;
}

export const updateTimes = (state, date) => {
  const times = window.fetchAPI(new Date(date));
  return times;
}


function Main() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const result = window.submitAPI(formData)
    if (result) {
      console.log('YES valid Forma')
      navigate('/confirmed')
    }
  }

  const submitLoginForm = (formData) => {
    console.log('formData ', formData.name)
    
    if (formData) {
      setUserName(formData.name);
      console.log('YES valid Forma')
      navigate('/account')
    }
  }

  const [availableTimes, dispatchTimeUpdate] = useReducer(updateTimes, initializeTimes() );

  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<BookingForm availableTimes={availableTimes} updateTimes={dispatchTimeUpdate}  submitForm={submitForm}/>} />
          <Route path="/confirmed" element={<ConfirmedBooking/>} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage submitLoginForm={submitLoginForm}  />} />
          <Route path="/account" element={<LogInAccount userName={userName}/>} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
  );
}

export default Main;
