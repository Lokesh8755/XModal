import React, { useState } from "react";
import "./styles/modal.css";

const Button = () => {
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);

  const Form = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    // Separate function for date validation
    const validateDateOfBirth = (date) => {
      if (new Date(date) > new Date()) {
        alert("Date of birth cannot be in the future");
        return false;
      }
      return true;
    };

    const handlePhoneValidation = (e) => {
      const phone = e.target.value;
      if (!/^[0-9]{10}$/.test(phone)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        e.target.setCustomValidity("Invalid phone number. Please enter a 10-digit phone number.");
      } else {
        e.target.setCustomValidity("");
      }
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();

      // First check date validation
      if (!validateDateOfBirth(formData.dob)) {
        return;
      }

      // Check if all fields are filled
      if (formData.username && formData.email && formData.phone && formData.dob) {
        console.log("Form submitted:", formData);
        
        // Reset form data
        setFormData({
          username: "",
          email: "",
          phone: "",
          dob: "",
        });

        // Show success message
        alert("Form submitted successfully!");
        closeModal();
      }
    };

    return (
      <>
        <div className="modal" onClick={closeModal}></div>
        <div className="modal-content">
          <h2>Fill Details</h2>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <br />
              <input
                className="inputs"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                title="Please fill out this field"
              />
            </label>
            <br />

            <label htmlFor="email">
              Email Address:
              <br />
              <input
                className="inputs"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Invalid email. Please check your email address."
              />
            </label>
            <br />

            <label htmlFor="phone">
              Phone Number:
              <br />
              <input 
                type="tel" 
                className="inputs"
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
                pattern="[0-9]{10}" 
                onInvalid={handlePhoneValidation}
              />
            </label>
            <br />

            <label htmlFor="dob">
              Date of Birth:
              <br />
              <input 
                type="date" 
                className="inputs"
                id="dob" 
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
            <div>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={openModal}>Open Form</button>
      {showModal && <Form />}
    </div>
  );
};

export default Button;