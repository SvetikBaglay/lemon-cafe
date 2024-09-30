

import '../App.css'
import './Main.css'
import { Routes, Route, Router } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingForm from './BookingForm';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import Delivery from './Delivery';
import Confirm from './Confirm';
import React, { useState, useReducer } from "react";

export const updateTimes = (state, action) => {
  return ['12:00', '13:00', '14:00','15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const initializeTimes = () => {
    return ['12:00', '13:00', '14:00','15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }




function Main() {

  //  const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'UPDATE_TIMES':
  //       return action.payload;
  //     default:
  //       return state;
  //   }
  // };



  const [availableTimes, dispatchTimeUpdate] = useReducer(updateTimes, initializeTimes() );

  // function updateTimes(selectedDate) {
  //   console.log('selectedDate', selectedDate )
  //   const currentDate = new Date()
  //   const selectedDateObj = new Date(selectedDate);
  //   const currentHour = currentDate.getHours();

  //   console.log('selectedDateObj ', selectedDateObj)
  //   // console.log('currentHour ', currentHour)

  //   if(selectedDateObj > currentDate) {
  //     console.log('IFFFF', availableTimes)
  //      dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes() });
  //   //  availableTimes = availableTimes.map(Number).filter(num => num > hour)

  //   } else {

  //     const newTime = availableTimes.filter(time => parseInt(time.split(":")[0], 10) > currentHour);

  //     dispatch({ type: 'UPDATE_TIMES', payload: newTime });
  //   }
  //   // console.log('selectedTime ', )
  // }

  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<BookingForm availableTimes={availableTimes} updateTimes={dispatchTimeUpdate}/>} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
  );
}

export default Main;
