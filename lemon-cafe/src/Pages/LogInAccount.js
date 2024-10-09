

import '../App.css'
import './Main.css'
import './OrderPage.css'

function LogInAccount({ userName }) {

// console.log('submitLoginForm ', submitLoginForm)
  return (
    <div className='booking-container'>
     
      <h1>Hello {userName}</h1>
       <img className='account-img' src='../images/cat.jpeg'></img>
    </div>
  );
}

export default LogInAccount;
