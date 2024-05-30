import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Fitness Tracker</h1>
          <p>Track your progress, set goals, and stay fit with our comprehensive fitness tracking platform.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>


      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Fitness Tracker helped me stay motivated and achieve my fitness goals. Highly recommended!"</p>
            <p className="user">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>"I love how easy it is to track my workouts and monitor my progress. Great app!"</p>
            <p className="user">- Jane Smith</p>
          </div>
        </div>
      </section>

      <section className="featured-workouts">
        <h2>Featured Workouts</h2>
        <div className="workout-list">

          <div className="workout-card workout-1">
            <h3>Cardio Blast</h3>
            <p>A high-intensity cardio workout to burn calories and improve cardiovascular health.</p>
          </div>
          <div className="workout-card workout-2">
            <h3>Strength Training</h3>
            <p>Build muscle and increase strength with our strength training exercises.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
