
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
          <label>User Name</label>
          <input for='name' id='name' type='text' ></input>
        </div>
        <div>
          <label>User Email</label>
          <input for='email' id='email' type='text' ></input>
        </div>
        <div>
          <label>User Password</label>
          <input for='password' id='password' type='text' ></input>
        </div>
      </div>
      <div className='login-block'>
        <a className='login-label'>I don't remember password</a>
        <button className='button button-secondary'>Log In</button>
      </div>
    </div>
  );
}


export default LoginPage;
