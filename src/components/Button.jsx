import React, { useState } from "react";

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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

    const validateDateOfBirth = (date) => {
      if (new Date(date) > new Date()) {
        alert("Date of birth cannot be in the future");
        return false;
      }
      return true;
    };

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert("Invalid email. Please check your email address.");
        return false;
      }
      return true;
    };

    const validatePhone = (phone) => {
      if (!/^[0-9]{10}$/.test(phone)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        return false;
      }
      return true;
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validate all fields
      if (!validateDateOfBirth(formData.dob)) return;
      if (!validateEmail(formData.email)) return;
      if (!validatePhone(formData.phone)) return;

      // If all validations pass
      console.log("Form submitted:", formData);
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
      alert("Form submitted successfully!");
      closeModal();
    };

    const handleModalClick = (e) => {
      if (e.target.className === 'modal') {
        closeModal();
      }
    };

    return (
      <div className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <br />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label htmlFor="email">
              Email Address:
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label htmlFor="phone">
              Phone Number:
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
              />
            </label>
            <br />

            <label htmlFor="dob">
              Date of Birth:
              <br />
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {showModal && <Form />}
    </div>
  );
};

export default Button;