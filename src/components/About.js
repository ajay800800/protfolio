import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container  rounded-4 shadow-lg d-flex flex-column flex-md-row align-items-center gap-4">
        <img
          src="/ajay.png"
          alt="Ajay Panchal"
          className="img-fluid"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
        />

        <div className="text-start">
          <h1 className="fw-bold mb-2" style={{ fontSize: '2rem', color: '#111' }}>Ajay Panchal</h1>
          <h5 className="text-muted mb-4">AI Engineer • Backend Developer • IIT Kharagpur</h5>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            I’m a developer focused on building intelligent, scalable applications using LLMs,
            clean frontends, and robust backends. I enjoy solving real-world problems using AI, deep learning, and system design.
          </p>
          <div className="mt-3">
            <p className="mb-1"><strong>Email:</strong> <a href="mailto:panchala023@gmail.com">panchala023@gmail.com</a></p>
            <p className="mb-1"><strong>GitHub:</strong> <a href="https://github.com/ajay900900/" target="_blank" rel="noreferrer">ajay900900</a></p>
            <p className="mb-1"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ajay-panchal-129154193" target="_blank" rel="noreferrer">Ajay Panchal</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

