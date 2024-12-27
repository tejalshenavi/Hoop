import React, { useState } from 'react';
import './WeddingPage.css';  // For grid styling

const WeddingPage = () => {
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
      <h2 className="page-title">Our Wedding Collections</h2>
      <p className="customization-note">
        Pick your perfect wedding gift or customize it to your liking by selecting and customizing the code!
      </p>
      <div className="grid-container">
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w1.jpeg')}>
          <img
            src="src/assets/w1.jpeg"
            alt="Wedding 1"
            className={enlargedImage === 'src/assets/w1.jpeg' ? 'enlarged' : ''}
          />
          <p>W101</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w2.jpeg')}>
          <img
            src="src/assets/w2.jpeg"
            alt="Wedding 2"
            className={enlargedImage === 'src/assets/w2.jpeg' ? 'enlarged' : ''}
          />
          <p>W102</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w3.jpeg')}>
          <img
            src="src/assets/w3.jpeg"
            alt="Wedding 3"
            className={enlargedImage === 'src/assets/w3.jpeg' ? 'enlarged' : ''}
          />
          <p>W103</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w4.jpeg')}>
          <img
            src="src/assets/w4.jpeg"
            alt="Wedding 4"
            className={enlargedImage === 'src/assets/w4.jpeg' ? 'enlarged' : ''}
          />
          <p>W104</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w5.jpeg')}>
          <img
            src="src/assets/w5.jpeg"
            alt="Wedding 5"
            className={enlargedImage === 'src/assets/w5.jpeg' ? 'enlarged' : ''}
          />
          <p>W105</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w6.jpeg')}>
          <img
            src="src/assets/w6.jpeg"
            alt="Wedding 6"
            className={enlargedImage === 'src/assets/w6.jpeg' ? 'enlarged' : ''}
          />
          <p>W106</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w7.jpeg')}>
          <img
            src="src/assets/w7.jpeg"
            alt="Wedding 7"
            className={enlargedImage === 'src/assets/w7.jpeg' ? 'enlarged' : ''}
          />
          <p>W107</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w8.jpeg')}>
          <img
            src="src/assets/w8.jpeg"
            alt="Wedding 8"
            className={enlargedImage === 'src/assets/w8.jpeg' ? 'enlarged' : ''}
          />
          <p>W108</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/w9.jpeg')}>
          <img
            src="src/assets/w9.jpeg"
            alt="Wedding 9"
            className={enlargedImage === 'src/assets/w9.jpeg' ? 'enlarged' : ''}
          />
          <p>W109</p>
        </div>
      </div>
    </div>
  );
}

export default WeddingPage;
