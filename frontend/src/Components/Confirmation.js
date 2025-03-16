import React from 'react';
import { Link } from 'react-router-dom'; // In case you want to add a link to go back or to other pages
import { Button } from 'react-bootstrap'; // Bootstrap button for better style

const Confirmation = () => {
  return (
    <div className="confirmation-container" style={{ backgroundColor: '#f0f8ff', padding: '50px 20px', textAlign: 'center' }}>
      <h2 className="confirmation-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#28a745' }}>
        🎉 Congratulations! 🎉
      </h2>

      <p className="confirmation-message" style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        You have successfully registered for the event! We are excited to have you join us for the fun-filled day!
      </p>

      <p className="confirmation-details" style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        A confirmation has also been sent to your email. If you need to make any changes or have any questions, don't hesitate to reach out to us.
      </p>

      <p className="contact-info" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginTop: '30px' }}>
        📞 If you want to cancel your spot or have any queries, call us at: <strong>555-5555-5555</strong>
      </p>

      <div className="cta-container" style={{ marginTop: '40px' }}>
        <Link to="/">
          <Button variant="success" style={{ padding: '10px 30px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Go Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
