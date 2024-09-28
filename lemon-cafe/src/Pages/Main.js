

import '../App.css'
import './Main.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingForm from './BookingForm';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import Delivery from './Delivery';
import Confirm from './Confirm';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<BookingForm />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </main>
  );
}

export default Main;
