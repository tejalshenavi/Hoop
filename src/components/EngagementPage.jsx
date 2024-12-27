import React, { useState } from 'react';
import './EngagementPage.css';  // For grid styling

const EngagementPage = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Function to toggle the enlargement of the clicked image
  const handleImageClick = (imageSrc) => {
    if (enlargedImage === imageSrc) {
      setEnlargedImage(null); // Close the image if it's already enlarged
    } else {
      setEnlargedImage(imageSrc); // Enlarge the clicked image
    }
  };

  return (
    <div>
      <h2 className="page-title">Our Engagement Collections</h2>
      <p className="customization-note">
        Pick your perfect engagement gift or customize it to your liking by selecting and customizing the code!
      </p>
      <div className="grid-container">
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e1.jpeg')}>
          <img
            src="src/assets/e1.jpeg"
            alt="Engagement 1"
            className={enlargedImage === 'src/assets/e1.jpeg' ? 'enlarged' : ''}
          />
          <p>E101</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e2.jpeg')}>
          <img
            src="src/assets/e2.jpeg"
            alt="Engagement 2"
            className={enlargedImage === 'src/assets/e2.jpeg' ? 'enlarged' : ''}
          />
          <p>E102</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e3.jpeg')}>
          <img
            src="src/assets/e3.jpeg"
            alt="Engagement 3"
            className={enlargedImage === 'src/assets/e3.jpeg' ? 'enlarged' : ''}
          />
          <p>E103</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e4.jpeg')}>
          <img
            src="src/assets/e4.jpeg"
            alt="Engagement 4"
            className={enlargedImage === 'src/assets/e4.jpeg' ? 'enlarged' : ''}
          />
          <p>E104</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e5.jpeg')}>
          <img
            src="src/assets/e5.jpeg"
            alt="Engagement 5"
            className={enlargedImage === 'src/assets/e5.jpeg' ? 'enlarged' : ''}
          />
          <p>E105</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e6.jpeg')}>
          <img
            src="src/assets/e6.jpeg"
            alt="Engagement 6"
            className={enlargedImage === 'src/assets/e6.jpeg' ? 'enlarged' : ''}
          />
          <p>E106</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e7.jpeg')}>
          <img
            src="src/assets/e7.jpeg"
            alt="Engagement 7"
            className={enlargedImage === 'src/assets/e7.jpeg' ? 'enlarged' : ''}
          />
          <p>E107</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e8.jpeg')}>
          <img
            src="src/assets/e8.jpeg"
            alt="Engagement 8"
            className={enlargedImage === 'src/assets/e8.jpeg' ? 'enlarged' : ''}
          />
          <p>E108</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/e9.jpeg')}>
          <img
            src="src/assets/e9.jpeg"
            alt="Engagement 9"
            className={enlargedImage === 'src/assets/e9.jpeg' ? 'enlarged' : ''}
          />
          <p>E109</p>
        </div>
      </div>
    </div>
  );
}

export default EngagementPage;
