import React, { useState } from 'react';
import './ProfileForm.css'; // Ensure this file exists and is properly styled

const ProfileForm = () => {
  const [photo, setPhoto] = useState('https://via.placeholder.com/150');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to submittedData state
    setSubmittedData({
      photo,
      name,
      email,
      phone,
      dob,
      address,
      bloodGroup,
    });
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Profile</h2>
        
        <div className="formGroup">
          <label htmlFor="photo" className="label">Profile Photo (Click to upload)</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="photo" style={{ cursor: 'pointer' }}>
            <img src={photo} alt="Profile" className="profilePhoto" />
          </label>
        </div>

        <div className="formGroup">
          <label htmlFor="name" className="label">Name (Enter your full name)</label>
          <input
            id="name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" className="label">Email (Enter a valid email address)</label>
          <input
            id="email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="phone" className="label">Mobile Number (Enter your phone number)</label>
          <input
            id="phone"
            type="tel"
            className="input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="dob" className="label">Date of Birth (Select your date of birth)</label>
          <input
            id="dob"
            type="date"
            className="input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="address" className="label">Address (Enter your residential address)</label>
          <textarea
            id="address"
            className="input"
            rows="2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="bloodGroup" className="label">Blood Group (Enter your blood group)</label>
          <input
            id="bloodGroup"
            type="text"
            className="input"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">Save Changes</button>
      </form>

      {/* Display the submitted data below the original form */}
      {submittedData && (
        <div className="previewContainer">
          <h2 className="title">Submitted Profile</h2>
          <div className="profilePhotoPreview">
            <img src={submittedData.photo} alt="Profile" className="profilePhoto" />
          </div>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mobile Number:</strong> {submittedData.phone}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Blood Group:</strong> {submittedData.bloodGroup}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
