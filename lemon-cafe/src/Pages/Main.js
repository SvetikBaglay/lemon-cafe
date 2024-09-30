

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
import React, { useState, useReducer, useEffect } from "react";


// fetchAPI(date) - This function accepts a date as a parameter and
// returns an array of available reservation times for the provided date

// submitAPI(formData) - This function accepts the booking form data
// as a parameter and will return true if the data was successfully submitted.

// Step 2: Update the booking form to display the available times from the API
// Update the initializeTimes function that you previously created to use the
// fetchData API function to return the available times for today’s date.

// Tip: You can create a Date object to represent today’s date.

// Update the updateTimes function that you previously created to use the
// fetchData API function.Remember, you dispatched the selected date to
// the updateTimes function. This should be passed to the fetchData function as a parameter.

// Step 3: Test the behavior

// Run your web app and check that the available times on the booking
// form change when you select a different date.

export const updateTimes = (state, action) => {
  return ['12:00', '13:00', '14:00','15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export const initializeTimes = () => {
  return ['12:00', '13:00', '14:00','15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

function Main() {

  const todayDate = new Date()
  const hour = todayDate.getHours()
  const min = todayDate.getMinutes()
  const stringTodayTime = ` ${hour}:${min}`

  //   const fetchData = () => {
  //   fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
  //     .then((response) => response.json())
  //     .then((data) => data.availableTimes);
  //     // return stringTodayTime
  // };

  // React.useEffect(() => {
  //   fetchData();
  //   console.log('time, min ', stringTodayTime)
  // }, []);


  const fetchAPI = (date) => {  }

  const submitAPI = (formData) => {}


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
