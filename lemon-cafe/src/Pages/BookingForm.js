

import '../App.css';
import './Main.css'
import './BookingForm.css'
import React, { useState } from 'react';
import { initializeTimes } from './Main';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';


function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const regexNumber = /^[0-9]*$/

  const isFormValid = resDate && resTime && guests;

  function handleChangeResDate(e) {
    setResDate(e.target.value);
    updateTimes(e.target.value)
  }

  function handleChangeGuests(e) {
    setGuests(e.target.value);
    // if (regexNumber.test(e.target.value) || e.target.value === '') {
    //   setGuests(e.target.value);
    // }
  }

  function handleSelectTime(e) {
    setResTime(e.target.value);
  }

  function handleOccasion(e) {
    setOccasion(e.target.value)
    console.groupCollapsed('selected Occasion', e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      date: resDate,
      time: resTime,
      guests: guests,
      occasion: occasion,
    };
    submitForm(formData)
    console.log('formData', formData);
  }


  // const formik = useFormik({

  //   initialValues: {
  //     date: resDate,
  //     time: resTime,
  //     guests: guests,
  //     occasion: occasion,
  //   },

  //   onSubmit: (values) => {
  //     const formData = {
  //       date: values.resDate,
  //       time: values.resTime,
  //       guests: values.guests,
  //       occasion: values.occasion,
  //     };
  //     console.log('FormData:', formData);
  //   },

  //   validationSchema: Yup.object({
  //   date: Yup.string()
  //         .required('Date is required'),
  //   guests: Yup.number()
  //           .required('Number of guests is required')
  //           // .min(1, 'Minimum 1 guest required')
  //           // .max(10, 'Maximum 10 guests allowed')
  //           // .typeError('Guests must be a number'),
  //   })
  // });


  return (
    <div className='booking-container'>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='info-block'>
          <label htmlFor='res-date'>Choose date</label>
          <input
            onChange={handleChangeResDate}
            value={resDate}
            type='date'
            name='date'
            id='date'
          />
          {/* {formik.errors.date && formik.touched.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null} */}
          <label htmlFor='res-time'>Choose time</label>
          <select value={resTime} onChange={handleSelectTime} id='resTime' name='resTime'>
            {(availableTimes || []).map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input
            onChange={handleChangeGuests}
            value={guests}
            type='text'
            name='guests'
            id='guests'
            min='1'
            max='10'
          />
          {/* {formik.errors.guests && formik.touched.guests ? (
            <div className="error">{formik.errors.guests}</div>
          ) : null} */}
        </div>

        <label htmlFor='occasion'>Occasion</label>
        <div className='seat-block'>
          <select value={occasion} onChange={handleOccasion} id='occasion' name='occasion'>
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>

          <input
            className='button button-secondary'
            name='reservations'
            id='reservations'
            type='submit'
            value='Make Your reservation'
            disabled={!isFormValid}
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
