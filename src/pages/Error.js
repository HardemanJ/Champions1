import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section abot-section">
      <div className="error-container">
        <h1>Opps Error</h1>
        <Link to="/" className="btn btn-p">
          Back home
        </Link>
      </div>
      <h2>Error</h2>
    </section>
  );
};

export default Error;
