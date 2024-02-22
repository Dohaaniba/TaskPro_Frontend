import React, { useState, useEffect } from 'react';
import { Link,  NavLink } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  

  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', loginData);

      console.log('Réponse de connexion du backend :', response.data);
      

      
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  if (redirectToHome) {
    // Rediriger vers la page d'accueil
    return <Redirect to="/" />;
  }

  return (
    <section className='login'>
      <div className="imgBx">
        <img src="./login.png" alt="" />
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Welcome back !</h2>
          <form onSubmit={handleLogin}>
            <div className="inputBx">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" name="" /> Remember me
              </label>
            </div>
            <div className="inputBx">
            <NavLink to="/Home">
        <input type="submit" value="Sign in" />
      </NavLink>
            </div>
            <div className="inputBx">
              <a href="#">Forgot password ?</a>
              <p>
                Don't have an account?{' '}
                <Link to="/signup">Register here!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
