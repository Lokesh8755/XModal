import React from 'react'

const Form = () => {
  return (
    <>
    <div className="modal">
    <div className="modal-content">
        <h2>Fill Details</h2>
      <form action="#">
        <label htmlFor="username">Username:</label><br/>
        <input type="text" id="username" name="username"/>
        <br/>
        
        <label htmlFor="email">Email Address:</label><br/>
        <input type="email" id="email" name="email"/>
        <br/>

        <label htmlFor="phone">Phone Number:</label><br/>
        <input type="number" id="phone" name="phone"/>
        <br/>

        <label htmlFor="dob">Date of Birth:</label><br/>
        <input type="date" id="dob" name="dob"/>
      </form>
    </div>
    </div>
    </>
  )
}

export default Form
