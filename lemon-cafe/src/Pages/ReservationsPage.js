

import '../App.css';
import './Main.css'
import './ReservationsPage.css'


function ReservationsPage() {
  return (
    <div className='booking-container'>
      <form className='booking-form'>
        <div className='info-block'>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date"></input>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
        </div>
        <label htmlFor="occasion">Occasion</label>
        <div className='seat-block'>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input className='button button-secondary' type="submit" value="Make Your reservation"></input>
        </div>
      </form>
    </div>
    
  );
}


export default ReservationsPage;
