

import '../App.css';
import './Main.css'
import './BookingForm.css'
import React, { useState } from 'react';
import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';


function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const options = [{id: 1, value: 'Birthday'}, {id: 2, value: 'Anniversary'}]
  const [form, setForm] = useState({ date: '', time: '', quests: 1, occasion: 1 })

  const regexNumber = /^[0-9]*$/

  // const isFormValid = resDate && resTime && guests;

  function handleChangeResDate(e) {
    setForm({ ...form, date: e.target.value });
    updateTimes(e.target.value)
  }

  function handleChangeGuests(e) {
    setForm({ ...form, guests: e.target.value });
  }

  function handleSelectTime(e) {
    setForm({ ...form, time: e.target.value });
  }

  function handleOccasion(e) {
    setForm({ ...form, occasion: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(form)
  }

  const formik = useFormik({
    initialValues: {
      date: '', time: '', guests: 1, occasion: 1
    },

    onSubmit: (values) => {
      submitForm(values);
    },

    validationSchema: Yup.object({
      date: Yup.string()
        .required('Required'),
      time: Yup.string()
        .required('Required'),
      guests: Yup.string()
        .required('Guests is required'),
      occasion: Yup.string()
        .required('Occasion is required'),
    }),
  });


  return (
    <div className='booking-container'>
      <form onSubmit={formik.handleSubmit} className='booking-form'>
        <div className='info-block'>
          <label htmlFor='date'>Choose date</label>
          <input onChange={formik.handleChange} value={formik.values.date}  id='date' name='date' type='date' />
          {formik.errors.date && formik.touched.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
          <label htmlFor='time'>Choose time</label>
          <select onChange={formik.handleChange} value={formik.values.time}  id='time' name='time' >
            {(availableTimes || []).map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          <label htmlFor='guests'>Number of guests</label>
          <input onChange={formik.handleChange} value={formik.values.guests}  id='guests' name='guests' type='text' min='1' max='10' />
        </div>
        <label htmlFor='occasion'>Occasion</label>
        <div className='seat-block'>
          <select onChange={formik.handleChange} value={formik.values.occasion} id='occasion' name='occasion'>
            {options.map(({id, value}) => (
              <option id={id} key={id} value={value}>{value}</option>
            ))}
          </select>
          <button className='button button-secondary' type='submit'>Make Your reservation</button>
          {/* <input  name='reservations' id='reservations' type='submit' value='Make Your reservation'/> */}
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
