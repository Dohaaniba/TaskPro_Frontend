import React, { useState } from 'react';
import '../css/login.scss';
import axios from 'axios';
import { Link   } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: ''
    
  });

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/save', signupData);

      console.log("Réponse d'inscription du backend :", response.data);

      toast.success('You are successfully registered !');

      // Mettre à jour l'état redirectToLogin si l'inscription est réussie
      setRedirectToLogin(true);

    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);

      toast.error('Erreur lors de l\'enregistrement.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
   
   

  return (
    <section>
       <ToastContainer />
      <div className="contentBx">
        <div className="formBx">
          <h2>Register now!</h2>
          <form onSubmit={handleSignup}>
            <div className="inputBx">
              <span>Last Name</span>
              <input type="text" name="lastName" value={signupData.lastName} onChange={handleChange} />
            </div>
            <div className="inputBx">
              <span>First Name</span>
              <input type="text" name="firstName" value={signupData.firstName} onChange={handleChange} />
            </div>
            <div className="inputBx">
              <span>Email</span>
              <input type="email" name="email" value={signupData.email} onChange={handleChange} />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input type="password" name="password" value={signupData.password} onChange={handleChange} />
            </div>
            
            <div className="inputBx">
             <input type="submit" value="Sign in" />
            </div>
            <div className="inputBx">
              <Link to="/login">Already have an account?</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="imgBx">
        <img src="./login.png" alt="" />
      </div>
    </section>
  );
};

export default Signup;