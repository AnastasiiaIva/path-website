import Home from '../pages/Home'
import { Link } from "react-router-dom"


function PopUp() {

    return (
      <>
      <link rel="stylesheet" href="css/popups.css" />
       <body>
        <Home/>
    {/* <!-- Popup Container hidden--> */}
    <div id="login-popup" className="popup">
      <div className="popup-overlay"></div>
      <div className="popup-content">
        <div className="popup-header">
          <div className="tabs">
            {/* <span id="register-tab">Register</span> */}
            <span id="login-tab" className="active">Log in</span>
          </div>
          <Link to="/" id="close-popup" className="close-btn">X</Link>
        </div>
        <div id="form-container">
          {/* <!-- Login Form --> */}
          <form id="login-form">
            <h2>Log in</h2>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <span id="email-status" className="status-icon"></span>
              </div>
              <div id="email-error" className="error-message"></div>
            </div>
            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <button type="button" id="toggle-password" className="toggle-btn">
                  🙈
                </button>
                <span id="password-status" className="status-icon"></span>
              </div>
              <div id="password-error" className="error-message">8+ characters</div>
            </div>
            <Link to="/profile"><button type="submit" className="submit-btn">Log in</button></Link>
            <h5>
              Not registered yet?
              <a href="#" id="register-link">Create an account</a>
            </h5>
            <h6>
              By continuing I agree with the
              <a href="#" id="terms-link">Terms & Conditions</a> and
              <a href="#" id="privacy-link">Privacy Policy</a>.
            </h6>
          </form>

          {/* <!-- Registration Form (Initially hidden) --> */}
          <form id="register-form" className="hidden">
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="register-email">Email address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="register-email"
                  name="email"
                  placeholder="Enter your email"
                />
                <span id="register-email-status" className="status-icon"></span>
              </div>
              <div id="register-email-error" className="error-message"></div>
            </div>
            <div className="form-group">
              <div className="form-group password-group">
                <label htmlFor="register-password">Password</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    id="toggle-register-password"
                    className="toggle-btn"
                  >
                    🙈
                  </button>
                  <span
                    id="register-password-status"
                    className="status-icon"
                  ></span>
                </div>
                <div id="register-password-error" className="error-message">
                  8+ characters
                </div>
              </div>
              <div className="form-group password-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    id="toggle-register-password"
                    className="toggle-btn"
                  >
                    🙈
                  </button>
                  <span id="confirm-password-status" className="status-icon"></span>
                </div>
                <div id="confirm-password-error" className="error-message"></div>
              </div>
            </div>
            <button type="submit" className="submit-btn">Create account</button>
            <div className="form-group-checkbox">
              <label>
                <input type="checkbox" id="news-checkbox" />
                <strong> Send me news and promotions</strong>
              </label>
            </div>
            <h5>
              Already have an account? <a href="#" id="login-link">Log in</a>
            </h5>
            <h6>
              By continuing I agree with the
              <a href="#" id="terms-link">Terms & Conditions</a> and
              <a href="#" id="privacy-link">Privacy Policy</a>.
            </h6>
          </form>
        </div>
      </div>
    </div>

    <script src="js/scripts.js" defer></script>
    <script src="js/popUp.js" defer></script>
  </body>
      </>
      )
    }
    
    export default PopUp