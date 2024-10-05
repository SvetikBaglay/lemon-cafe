
import './Main.css'
import '../App.css'
import './LoginPage.css'


function LoginPage() {
  return (
    <div className="login-container">
      <div className='description-block'>
      </div>
      <div className='info-block'>
        <div>
          <label htmlFor='user-name'>User Name</label>
          <input for='name' id='name' type='text' ></input>
        </div>
        <div>
          <label htmlFor='user-email'>User Email</label>
          <input for='email' id='email' type='text' ></input>
        </div>
        <div>
          <label htmlFor='user-password'>User Password</label>
          <input for='password' id='password' type='text' ></input>
        </div>
      </div>
      <div className='login-block'>
        <a className='login-label'>I don't remember password</a>
        <button aria-label='Log-In' className='button button-secondary'>Log In</button>
      </div>
    </div>
  );
}


export default LoginPage;
