import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/api';
import { UserContext } from '../components/UserContext';
import './loginform.css'; 

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);
      
      const response = await registerUser(data);
      if (response.success) {
        setUser({
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          dob: data.dob || '',
          address: data.address || '',
          bloodGroup: data.bloodGroup || '',
          photo: 'https://via.placeholder.com/150',
        });
        navigate('/');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="title">Register</h2>
        <div className="formGroup">
          <label htmlFor="name" className="label">Name</label>
          <input
            id="name"
            type="text"
            className="input"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <div className="errorMessage">{errors.name.message}</div>}
        </div>
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
        <button type="submit" className="button">Register</button>
        <div className="mt-3">
          <a href="/" className="registerLink">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
