import React, { useState } from 'react';
import './Popup.css';
import ExampleImage from './../../images/TourInfo/photo_5240157656910515385_x.jpg'; 
import ExampleImage1 from './../../images/TourInfo/photo_5240025633910802575_y.jpg'; 
import ExampleImage2 from './../../images/TourInfo/photo_5240025633910802574_y.jpg'; 
import ExampleImage3 from './../../images/TourInfo/photo_5240157656910515385_x.jpg'; 

const Popup = (props) => {
  const { image, location, rating, duration, price, onClick, onClose } = props;
  const [currentImage, setCurrentImage] = useState(ExampleImage);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  // Function to show the alert
  const showAlert = () => {
    alert('Забронировано успешно!');
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="new-container">
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img
              src={image}
              alt="Пример"
              style={{ width: '358.4px', height: '326.4px' }}
            />
            <div style={{ marginLeft: '24px' }}>
              <p style={{ color: '#222', fontFamily: 'Montserrat', fontSize: '28.8px', fontStyle: 'normal', fontWeight: 400, lineHeight: '130%', marginBottom: '0', marginTop: '48px' }}>
                {location}
              </p>
              <p style={{ width: '158.4px', height: '24.8px', color: '#FF0303', fontFamily: 'Lato', fontSize: '16px', fontWeight: 400, lineHeight: '130%', marginBottom: '0' }}>
                <span style={{ color: '#FF0303', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '100%', letterSpacing: '0.2px' , marginTop: '8px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none" style={{ width: '11px', height: '15px', flexShrink: 0, fill: '#FF0303', marginRight: '4px' }}>
                    <path d="M5.5 0C2.45929 0 0 2.3475 0 5.25C0 9.1875 5.5 15 5.5 15C5.5 15 11 9.1875 11 5.25C11 2.3475 8.54071 0 5.5 0ZM5.5 7.125C4.97904 7.125 4.47942 6.92746 4.11104 6.57583C3.74267 6.22419 3.53571 5.74728 3.53571 5.25C3.53571 4.75272 3.74267 4.27581 4.11104 3.92417C4.47942 3.57254 4.97904 3.375 5.5 3.375C6.02096 3.375 6.52058 3.57254 6.88896 3.92417C7.25733 4.27581 7.46429 4.75272 7.46429 5.25C7.46429 5.74728 7.25733 6.22419 6.88896 6.57583C6.52058 6.92746 6.02096 7.125 5.5 7.125Z" fill="#FF0303"/>
                  </svg>
                </span>
                {location}
              </p>
              <p style={{ color: '#444', fontFamily: 'Lato', fontSize: '14.4px', fontStyle: 'normal', fontWeight: 500, lineHeight: '100%', marginBottom: '0'}}>
                <span style={{ color: '#FFCA00', fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: 500, lineHeight: '100%', marginRight: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" style={{ width: '12.5px', height: '11.25px', fill: '#FFCA00'}}>
                    <path d="M12.096 3.96145L8.34873 3.44818L6.67361 0.247595C6.62785 0.159965 6.55258 0.0890263 6.4596 0.0459067C6.22642 -0.0625878 5.94305 0.0278243 5.82645 0.247595L4.15133 3.44818L0.404073 3.96145C0.300761 3.97535 0.206305 4.02126 0.133987 4.0908C0.0465582 4.17549 -0.0016189 4.28943 4.154e-05 4.40758C0.00170198 4.52573 0.0530641 4.63843 0.142842 4.72091L2.85403 7.21211L2.2135 10.7298C2.19848 10.8117 2.20809 10.8958 2.24124 10.9728C2.27438 11.0497 2.32974 11.1164 2.40104 11.1652C2.47233 11.214 2.55671 11.243 2.6446 11.2489C2.7325 11.2548 2.82039 11.2374 2.89831 11.1986L6.25003 9.53778L9.60175 11.1986C9.69326 11.2445 9.79952 11.2598 9.90135 11.2431C10.1582 11.2014 10.3308 10.9719 10.2866 10.7298L9.64603 7.21211L12.3572 4.72091C12.431 4.65275 12.4797 4.56373 12.4945 4.46636C12.5343 4.22294 12.3543 3.99761 12.096 3.96145Z" fill="#FFCA00"/>
                  </svg>
                </span>
                {rating}
              </p>
              <p style={{ color: '#000', fontFamily: 'Source Sans Pro', fontSize: '14.4px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', marginBottom: '0', marginTop: '4px' }}>
                <span style={{ width: '24px', height: '24px', flexShrink: 0 }}>
                  Длительность: {duration}
                </span>
              </p>
              <p style={{ color: '#666', fontFamily: 'Lato', fontSize: '16px', fontStyle: 'normal', fontWeight: 800, lineHeight: '100%', marginBottom: '0', marginTop: '16px'}}>ОПИСАНИЕ</p>
              <p style={{ width: '336px', color: '#666', fontFamily: 'Lato', fontSize: '14.4px', fontStyle: 'normal', fontWeight: 400, lineHeight: '180%', marginBottom: '0', marginTop: '16px' }}>
                Мы являемся крупнейшим поставщиком праздничных услуг в мире с партнерами и местами, разбросанными по всему миру, уделяя приоритетное внимание обслуживанию и удовлетворенности клиентов.
              </p>
              <button
        className="reservation-button"
        style={{
          width: '232px',
          height: '42.4px',
          background: '#FF0303',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '24px',
        }}
        onClick={showAlert} // Add the onClick event to the button
      >
        <span
          style={{
            color: '#FFF',
            fontFamily: 'Lato',
            fontSize: '19.2px',
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: '100%',
          }}
        >
          Забронировать сейчас
        </span>
      </button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              src={ExampleImage1}
              alt="Картинка 2"
              style={{ width: '116.8px', height: '77.6px', cursor: 'pointer' }}
              onClick={() => handleImageClick(ExampleImage1)}
            />
            <img
              src={ExampleImage2}
              alt="Картинка 3"
              style={{ width: '116.8px', height: '77.6px', marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => handleImageClick(ExampleImage2)}
            />
            <img
              src={ExampleImage3}
              alt="Картинка 4"
              style={{ width: '116.8px', height: '77.6px', marginLeft: '4px', cursor: 'pointer' }}
              onClick={() => handleImageClick(ExampleImage3)}
            />
          </div>
        </div>
<button className="copy-button" style={{ width: '38px', height: '38.96px', fill: '#FF0303', top: '10px', right: '10px' }} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
          <path d="M19 0C8.50403 0 0 8.71888 0 19.48C0 30.2412 8.50403 38.9601 19 38.9601C29.496 38.9601 38 30.2412 38 19.48C38 8.71888 29.496 0 19 0ZM19 35.1897C10.5343 35.1897 3.67742 28.1596 3.67742 19.48C3.67742 10.8004 10.5343 3.77033 19 3.77033C27.4657 3.77033 34.3226 10.8004 34.3226 19.48C34.3226 28.1596 27.4657 35.1897 19 35.1897ZM26.7992 14.5943L22.0339 19.48L26.7992 24.3657C27.1593 24.7349 27.1593 25.3319 26.7992 25.7011L25.0677 27.4763C24.7077 27.8454 24.1254 27.8454 23.7653 27.4763L19 22.5905L14.2347 27.4763C13.8746 27.8454 13.2923 27.8454 12.9323 27.4763L11.2008 25.7011C10.8407 25.3319 10.8407 24.7349 11.2008 24.3657L15.9661 19.48L11.2008 14.5943C10.8407 14.2251 10.8407 13.6282 11.2008 13.259L12.9323 11.4838C13.2923 11.1146 13.8746 11.1146 14.2347 11.4838L19 16.3695L23.7653 11.4838C24.1254 11.1146 24.7077 11.1146 25.0677 11.4838L26.7992 13.259C27.1593 13.6282 27.1593 14.2251 26.7992 14.5943Z" fill="#FF0303"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Popup;

