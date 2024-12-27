import React, { useState } from 'react';
import './AnniversaryPage.css';  // For grid styling

const AnniversaryPage = () => {
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
      <h2 className="page-title">Our Anniversary Collections</h2>
      <p className="customization-note">
        Pick your perfect anniversary gift or customize it to your liking by selecting code and customize it!
      </p>
      <div className="grid-container">
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a1.jpeg')}>
          <img
            src="src/assets/a1.jpeg"
            alt="Anniversary 1"
            className={enlargedImage === 'src/assets/a1.jpeg' ? 'enlarged' : ''}
          />
          <p>A101</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a2.jpeg')}>
          <img
            src="src/assets/a2.jpeg"
            alt="Anniversary 2"
            className={enlargedImage === 'src/assets/a2.jpeg' ? 'enlarged' : ''}
          />
          <p>A102</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a3.jpeg')}>
          <img
            src="src/assets/a3.jpeg"
            alt="Anniversary 3"
            className={enlargedImage === 'src/assets/a3.jpeg' ? 'enlarged' : ''}
          />
          <p>A103</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a4.jpeg')}>
          <img
            src="src/assets/a4.jpeg"
            alt="Anniversary 4"
            className={enlargedImage === 'src/assets/a4.jpeg' ? 'enlarged' : ''}
          />
          <p>A104</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a5.jpeg')}>
          <img
            src="src/assets/a5.jpeg"
            alt="Anniversary 5"
            className={enlargedImage === 'src/assets/a5.jpeg' ? 'enlarged' : ''}
          />
          <p>A105</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a6.jpeg')}>
          <img
            src="src/assets/a6.jpeg"
            alt="Anniversary 6"
            className={enlargedImage === 'src/assets/a6.jpeg' ? 'enlarged' : ''}
          />
          <p>A106</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a7.jpeg')}>
          <img
            src="src/assets/a7.jpeg"
            alt="Anniversary 7"
            className={enlargedImage === 'src/assets/a7.jpeg' ? 'enlarged' : ''}
          />
          <p>A107</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a8.jpeg')}>
          <img
            src="src/assets/a8.jpeg"
            alt="Anniversary 8"
            className={enlargedImage === 'src/assets/a8.jpeg' ? 'enlarged' : ''}
          />
          <p>A108</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/a9.jpeg')}>
          <img
            src="src/assets/a9.jpeg"
            alt="Anniversary 9"
            className={enlargedImage === 'src/assets/a9.jpeg' ? 'enlarged' : ''}
          />
          <p>A109</p>
        </div>
      </div>
    </div>
  );
}

export default AnniversaryPage;
