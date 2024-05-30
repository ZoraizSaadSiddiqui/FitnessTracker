// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import ProgressTracker from './Components/ProgressTracker';
import CalorieTracker from'./Components/CalorieTracker.js';
import Home from './Components/Home';
import WorkoutSchedule from './Components/WorkoutSchedule';
import Goals from './Components/Goals';
import GPSIntegration from './Components/GPSIntegration';
import SettingPage from './Components/SettingPage.js';

function App() {
  return (
    <Router>
      <Header title="Fitness Tracker" />
      <Sidebar />
      <div className="container" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/workoutSchedule" element={<WorkoutSchedule />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/track-progress" element={<ProgressTracker />} />
          <Route path="/CalorieTracker" element={<CalorieTracker/>}/>
          <Route path="/gps-integration" element={<GPSIntegration/>}/>
          <Route path="/Setting" element={<SettingPage />} />

          
       
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
