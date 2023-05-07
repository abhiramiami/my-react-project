import "../App.css";
import { Icon } from "@iconify/react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <Icon icon="mdi:user-supervisor" width={500} />
              {/*<img src={profile} alt='profile' className='profile'/>*/}
            </div>
          </div>
          <div className="one">
            <h1>INVIGILATOR LOGIN</h1>
            <div>
              <Icon icon="mdi:user" className="email" />
              {/*<img src={email} alt='email' className='email'/>*/}
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="second-input">
              <Icon icon="mdi:password-remove" className="email" />
              {/*<img src={pass} alt='pass' className='pass'/>*/}
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <Link to="/dashboard">
                {" "}
                <button className="button">LOGIN</button>
              </Link>
            </div>
            <p className="link">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
