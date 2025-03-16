import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { Button } from 'react-bootstrap'; // For Bootstrap button styling

const Confirmdeleted = () => {
  return (
    <div className="container text-center my-5">
      {/* Main heading */}
      <h2 className="text-danger">Your Registration Has Been Successfully Canceled!</h2>

      {/* Subheading */}
      <p className="lead text-white">We're sorry to see you go, but we respect your decision.</p>

      {/* Icon or visual representation */}
      <img 
        src="https://img.icons8.com/ios-filled/100/000000/delete-forever.png" 
        alt="Canceled Icon" 
        className="my-4"
      />

      {/* Message section */}
      <div className="alert alert-info">
        <p>If this was a mistake, don't worry! You can always <Link to="/signup">re-register</Link> for the event.</p>
        <p>For any questions or further assistance, feel free to contact us at <strong>555-555-5555</strong>.</p>
      </div>

      {/* Button to redirect to the homepage or another useful page */}
      <Link to="/" className="d-inline-block my-3">
        <Button variant="outline-primary" size="lg">Return to Homepage</Button>
      </Link>
      
      {/* Additional motivational message */}
      <p className="mt-4 text-muted text-white">Thanks for being a part of our community. We hope to see you again!</p>
    </div>
  );
};

export default Confirmdeleted;
