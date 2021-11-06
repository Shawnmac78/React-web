import ReactDOM from "react-dom";
import {  Link } from "react-router-dom";
 
function Nav() {
    return (  
  <div>
<a> <Link to="/">Home</Link></a>
<a><Link to="/about">About</Link></a>
<a> <Link to="/register">Register</Link></a>
<a> <Link to="/login">Login</Link></a>
      
  </div>
    );
  }
  
  export default Nav;
  