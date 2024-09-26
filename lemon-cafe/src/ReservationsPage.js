

import './App.css';
import './Main.css'
import './ReservationsPage.css'


function ReservationsPage() {
  return (
    <div className="booking-container">
      <div className='description-block'>
        <h3>Book with us!</h3>
        <p>Please complete the table reservation form.</p>
      </div>
      <div className='info-block'>
        <div>
          <label>Select GUEST*</label>
          <input for='guest' id='guest' type='text' ></input>
        </div>
        <div>
          <label>Select Date*</label>
          <input for='date' id='date' type='text' ></input>
        </div>
        <div>
          <label>Select HOUR*</label>
          <input for='hour' id='hour' type='text' ></input>
        </div>
      </div>
      <div className='seat-block'>
        <label className='seat-label' >Seating area*</label>
        <div className='seat-item'>
          <label>Hall</label>
          <input for='hall' id='hall' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Outside</label>
          <input for='outside' id='outside' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Yard</label>
          <input for='yard' id='yard' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Terrace</label>
          <input for='terrace' id='terrace' type="checkbox" />
        </div>
      </div>
    </div>
  );
}


export default ReservationsPage;
