
import './Main.css'
import '../App.css'
import './LoginPage.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useState } from 'react';


function LoginPage({submitLoginForm}) {

  const [form, setForm] = useState({ name: '', email: '', password: ''})

  function handleSubmit(e) {
    e.preventDefault();
  }

  const formik = useFormik({
    initialValues: {
    name: '',
    email: '',
    password: ''
  },

   onSubmit: (values) => {
    console.log('values ', values)
      submitLoginForm(values);
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('User Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        
    }),
})

  return (
    <form onSubmit={formik.handleSubmit} className="login-container">

      <div className='info-block'>
        <div>
          <label htmlFor='name'>User Name</label>
          <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}   id='name' type='text' name='name' ></input>
          {formik.errors.name && formik.touched.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='email'>User Email</label>
          <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}   id='email' type='text' name='email' ></input>
          {formik.errors.email && formik.touched.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor='password'>User Password</label>
          <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}   id='password' type='text' name='password' ></input>
          {formik.errors.password && formik.touched.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <div className='login-block'>
        <a className='login-label'>I don't remember password</a>
        <button type='submit'  aria-label='Log-In' className='button button-secondary'>Log In</button>
      </div>
    </form>
  );
}


export default LoginPage;
