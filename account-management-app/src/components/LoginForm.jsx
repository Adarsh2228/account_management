import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api';
import './loginform.css'; // Import the CSS file

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      
      const response = await loginUser(data);
      if (response.success) {
        localStorage.setItem('token', response.token);
        navigate('/profile');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="title">Login</h2>
        <div className="formGroup">
          <label htmlFor="email" className="label">Email</label>
          <input
            id="email"
            type="email"
            className="input"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <div className="errorMessage">{errors.email.message}</div>}
        </div>
        <div className="formGroup">
          <label htmlFor="password" className="label">Password</label>
          <input
            id="password"
            type="password"
            className="input"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <div className="errorMessage">{errors.password.message}</div>}
        </div>
        <button
          type="submit"
          className="button"
        >
          Login
        </button>
        <a href="/register" className="registerLink">New user? Register</a>
      </form>
    </div>
  );
};

export default LoginForm;
