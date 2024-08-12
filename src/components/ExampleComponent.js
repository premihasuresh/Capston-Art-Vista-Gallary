import React from 'react';
import './styles.css'; // Make sure to import your CSS file

const ExampleComponent = () => {
  return (
    <div className="image-container">
      <img src="path/to/your/image.jpg" alt="Artwork Image" />
      <span className="heart-symbol">&#9829;</span> {/* Heart symbol */}
    </div>
  );
};

export default ExampleComponent;