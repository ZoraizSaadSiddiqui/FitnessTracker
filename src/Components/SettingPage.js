// SettingPage.js

import React, { useState } from 'react';

const SettingPage = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSaveSettings = () => {
    let validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (password && password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
    
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      if (password) {
        localStorage.setItem('password', password); 
      }
      alert('Settings saved!');
      setErrors({});
    }
  };

  const containerStyle = {
    color:'#097972',
    
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  const headerStyle = {
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    marginRight: '10px',
    color:' #097972',
  };

  const inputStyle = {
    padding: '5px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '5px',
    ...(errors.name && { borderColor: 'red' }),
    ...(errors.email && { borderColor: 'red' }),
    ...(errors.password && { borderColor: 'red' }),
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#065a5a',
    color: '#fff',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#087373',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Settings</h1>
      <div style={formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          style={inputStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="password" style={labelStyle}>Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={inputStyle}
        />
        {errors.password && <div style={errorStyle}>{errors.password}</div>}
      </div>
      <button
        onClick={handleSaveSettings}
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Save
      </button>
    </div>
  );
};

export default SettingPage;
