import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchDogImage() {
    setLoading(true);

    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card shadow-sm p-4 text-center" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="h3 mb-3">
          <i className="bi bi-camera-fill text-primary me-2"></i>
          Random Dog Viewer
        </h1>

        <div className="my-3 d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
          {loading ? (
            <p className="text-muted mb-0">Loading...</p>
          ) : (
            <img
              src={dogImage}
              alt="A Random Dog"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          )}
        </div>

        <button className="btn btn-primary w-100" onClick={fetchDogImage}>
          <i className="bi bi-arrow-clockwise me-2"></i>
          Get New Dog
        </button>
      </div>
    </div>
  );
}

export default App;
