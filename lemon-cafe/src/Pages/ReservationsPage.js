

import '../App.css';
import './Main.css'
import './ReservationsPage.css'


function ReservationsPage() {
  return (
    <div className="booking-container">
      <div className='description-block'>
        <h3>Book with us!</h3>
        <p>Please complete the table reservation namem.</p>
      </div>
      <div className='info-block'>
        <div>
          <label>Select GUEST*</label>
          <input name='guest' id='guest' type='number' ></input>
        </div>
        <div>
          <label>Select Date*</label>
          <input name='date' id='date' type='number' ></input>
        </div>
        <div>
          <label>Select HOUR*</label>
          <input name='hour' id='hour' type='text' ></input>
        </div>
      </div>
      <div className='seat-block'>
        <label className='seat-label' >Seating area*</label>
        <div className='seat-item'>
          <label>Hall</label>
          <input name='hall' id='hall' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Outside</label>
          <input name='outside' id='outside' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Yard</label>
          <input name='yard' id='yard' type="checkbox" />
        </div>
        <div className='seat-item'>
          <label>Terrace</label>
          <input name='terrace' id='terrace' type="checkbox" />
        </div>
      </div>
    </div>
  );
}


export default ReservationsPage;
