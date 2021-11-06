

function Login() {
    return (  
  <div>
  
  <div class="container">
  <form id="signup" class="form">
      <h1>Login</h1>
      <div class="form-field">
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" autocomplete="off"/>
          <small></small>
      </div>
  
  
      <div class="form-field">
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" autocomplete="off"/>
          <small></small>
      </div>
  
  
      <div class="form-field">
          <input type="submit" value="Login"/>
      </div>
  </form>
  </div>
  </div>
    );
  }
  
  export default Login;
  