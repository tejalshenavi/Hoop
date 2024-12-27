import React, { useState } from 'react';
import './BirthdayPage.css';

const BirthdayPage = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    if (enlargedImage === imageSrc) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(imageSrc);
    }
  };

  return (
    <div>
      <h2 className="page-title">Our Birthday Collections</h2>
      <p className="welcome-message">Pick your perfect birthday present or customize it to your liking!</p>
      <div className="grid-container">
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b1.jpeg')}>
          <img
            src="src/assets/b1.jpeg"
            alt="Birthday 1"
            className={enlargedImage === 'src/assets/b1.jpeg' ? 'enlarged' : ''}
          />
          <p>B101</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b2.jpeg')}>
          <img
            src="src/assets/b2.jpeg"
            alt="Birthday 2"
            className={enlargedImage === 'src/assets/b2.jpeg' ? 'enlarged' : ''}
          />
          <p>B102</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b3.jpeg')}>
          <img
            src="src/assets/b3.jpeg"
            alt="Birthday 3"
            className={enlargedImage === 'src/assets/b3.jpeg' ? 'enlarged' : ''}
          />
          <p>B103</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b4.jpeg')}>
          <img
            src="src/assets/b4.jpeg"
            alt="Birthday 4"
            className={enlargedImage === 'src/assets/b4.jpeg' ? 'enlarged' : ''}
          />
          <p>B104</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b5.jpeg')}>
          <img
            src="src/assets/b5.jpeg"
            alt="Birthday 5"
            className={enlargedImage === 'src/assets/b5.jpeg' ? 'enlarged' : ''}
          />
          <p>B105</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b6.jpeg')}>
          <img
            src="src/assets/b6.jpeg"
            alt="Birthday 6"
            className={enlargedImage === 'src/assets/b6.jpeg' ? 'enlarged' : ''}
          />
          <p>B106</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b7.jpeg')}>
          <img
            src="src/assets/b7.jpeg"
            alt="Birthday 7"
            className={enlargedImage === 'src/assets/b7.jpeg' ? 'enlarged' : ''}
          />
          <p>B107</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b8.jpeg')}>
          <img
            src="src/assets/b8.jpeg"
            alt="Birthday 8"
            className={enlargedImage === 'src/assets/b8.jpeg' ? 'enlarged' : ''}
          />
          <p>B108</p>
        </div>
        <div className="grid-item" onClick={() => handleImageClick('src/assets/b9.jpeg')}>
          <img
            src="src/assets/b9.jpeg"
            alt="Birthday 9"
            className={enlargedImage === 'src/assets/b9.jpeg' ? 'enlarged' : ''}
          />
          <p>B109</p>
        </div>
      </div>
    </div>
  );
}

export default BirthdayPage;
