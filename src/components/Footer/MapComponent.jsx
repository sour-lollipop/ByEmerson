import React from 'react';

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6839142779345!2d76.83778067605544!3d43.23708637112493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c3a9797295%3A0x86f0e38fa9f0096a!2z0YPQu9C40YbQsCDQodCw0LjQvdCwIDIzLCDQkNC70LzQsNGC0Ys!5e0!3m2!1sru!2skz!4v1690102028509!5m2!1sru!2skz"
      width="300"
      height="250"
      // title="Google Map of Location" // Add a unique and meaningful title here
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
// const iframe = styled.div` 
//   @media (max-width: 840px) {
//     align-items: center;
//   }
 
// `;