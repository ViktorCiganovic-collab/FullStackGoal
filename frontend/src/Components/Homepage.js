import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className='homepage-container text-center text-white' style={{ backgroundColor: '#282c34', padding: '50px 20px' }}>
      <h1 className='event-title' style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Join Us for an Exciting Soccer Event!
      </h1>

      <p className='event-description' style={{ fontSize: '1.2rem', marginTop: '20px', lineHeight: '1.5' }}>
        Calling all soccer enthusiasts! ⚽ Get ready for a fun-filled day with fellow soccer fanatics.
        Whether you're an experienced player or just love watching the game, this event has something for everyone.
      </p>

      <div className='event-details' style={{ marginTop: '30px' }}>
        <h3>Event Details:</h3>
        <p><strong>Date:</strong> Saturday, April 30th, 2025</p>
        <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
        <p><strong>Location:</strong> Davis Soccer Field</p>
        <p><strong>Activities:</strong> Soccer matches, drills, and more!</p>
      </div>

      <div className='cta-container' style={{ marginTop: '40px' }}>
        <h3>Don’t Miss Out!</h3>
        <p style={{ fontSize: '1.2rem' }}>
          Sign up now to secure your spot at the event and be part of the fun!
        </p>
        <Link to="/signup">
          <button className='cta-btn' style={{ 
            display: 'inline-block', 
            padding: '15px 30px', 
            backgroundColor: '#FF6347', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            marginTop: '20px',
            cursor: 'pointer'
          }}>Sign Up Now</button>
        </Link>
      </div>

      {/* Cancel Registration Button */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/deleterequest">
          <button className='cancel-btn' style={{
            display: 'inline-block',
            padding: '12px 25px',
            backgroundColor: '#f44336', // Red color for cancel
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginTop: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
          >
            Cancel Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;


