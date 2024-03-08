import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  "./Post-payment.css";

function Success() {
    const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); 
    localStorage.clear();
    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, [navigate]);

  return <div className='after-payment-container'><h1>Success! Redirecting to home page...</h1></div>;
}

export default Success;