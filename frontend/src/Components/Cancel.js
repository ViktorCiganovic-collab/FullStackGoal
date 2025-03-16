import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {

    const [email, setEmail] = useState('');
    const [ssn, setSsn] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form submitted");
      
      const membershipData = { email, ssn };
      
      try {
        const response = await fetch('/cancel-registration', {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(membershipData),
        });
        console.log("Response:", response); // Check the response status
        
        if (response.ok) {
          const result = await response.json();
          console.log("Result message:", result.message); // Check the result message
          setMessage(result.message);   
          console.log('Navigating to /deletedmember');      
          navigate('/deletedmember');  // Navigate to the 'deletedmember' route
        } else {
          const errorResult = await response.json();
          setMessage(errorResult.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again later.');
      }
    }
    

  return (
    <div className='container text-white'>
      <h3 className='text-center'>Cancel Your Registration</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group my-3'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='form-control my-2'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='ssn'>Social Security Number:</label>
          <input
            type='number'
            id='ssn'
            name='ssn'
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            required
            className='form-control my-2'
          />
        </div>
        <button type='submit' className='btn btn-danger my-3'>
          Cancel Registration
        </button>
      </form>

      {message && <p className='message'>{message}</p>}
    </div>
  )
}

export default Cancel;