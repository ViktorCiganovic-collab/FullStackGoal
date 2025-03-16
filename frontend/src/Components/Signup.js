import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom to navigate after successful registering
import { Form, Button } from 'react-bootstrap'; // Import React Bootstrap components

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const ssn = e.target.ssn.value;
    const number = e.target.number.value;

    const memberData = { name, email, ssn, number };

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(memberData),
      });

      if (response.ok) {
        navigate('/confirmation');
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again');
    }
  };

  return (
    <div className='container'>
      <h3 className='text-center text-white'>Signup Form for Davis event for soccerfanatics!</h3>

      <Form onSubmit={handleSubmit} className='text-white'>
        {/* Name Input */}
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='text'
            name='name'
            required
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            required
          />
        </Form.Group>

        {/* SSN Input */}
        <Form.Group className='mb-3' controlId='formSSN'>
          <Form.Label>Social Security Number:</Form.Label>
          <Form.Control
            type='number'
            name='ssn'
            required
          />
        </Form.Group>

        {/* Phone Number Input */}
        <Form.Group className='mb-3' controlId='formPhone'>
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type='number'
            name='number'
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant='primary' type='submit' className='w-100'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
