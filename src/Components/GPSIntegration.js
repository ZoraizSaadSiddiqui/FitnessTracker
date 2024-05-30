import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSpinner, faExclamationCircle, faSyncAlt, faRunning } from '@fortawesome/free-solid-svg-icons';

const GPSIntegration = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');
  const [steps, setSteps] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [distance, setDistance] = useState(0);

  const fetchLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLoading(false);
      });
    } catch (error) {
      setError('Failed to get location. Please enable location services.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        if (latitude && longitude) {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          if (!response.ok) {
            throw new Error('Failed to fetch address data');
          }
          const data = await response.json();
          setAddress(data.display_name);
        }
      } catch (error) {
        setError('Failed to fetch address. Please try again later.');
      }
    };

    fetchAddress();
  }, [latitude, longitude]);

  useEffect(() => {
    const interval = setInterval(() => {
    
      setSteps((prevSteps) => prevSteps + Math.floor(Math.random() * 100));
          setCaloriesBurned((prevCalories) => prevCalories + Math.floor(Math.random() * 50));
     
      setDistance((prevDistance) => prevDistance + Math.floor(Math.random() * 1000) / 100);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleReload = () => {
    setLoading(true);
    setError(null);
    setAddress('');
    setLatitude(null);
    setLongitude(null);
    fetchLocation();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <div style={{ maxWidth: '600px', padding: '30px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color:' #097972' }}>Fitness Tracker</h2>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '24px', marginBottom: '10px' }} />
            <p style={{ margin: 0 }}>Fetching location...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faExclamationCircle} style={{ fontSize: '24px', marginBottom: '10px', color: 'red' }} />
            <p style={{ color: 'red', margin: 0 }}>Error: {error}</p>
            <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={handleReload}>Try Again</button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <p style={{ margin: 0 }}>Latitude: {latitude}</p>
                <p style={{ margin: 0 }}>Longitude: {longitude}</p>
                <p style={{ margin: 0 }}>Address: {address}</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <div>
                <FontAwesomeIcon icon={faRunning} style={{ fontSize: '24px', marginRight: '10px' }} />
                <span>{steps} steps</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faSyncAlt} style={{ fontSize: '24px', marginRight: '10px' }} />
                <span>{caloriesBurned} calories burned</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '24px', marginRight: '10px' }} />
                <span>{distance.toFixed(2)} km distance covered</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPSIntegration;
