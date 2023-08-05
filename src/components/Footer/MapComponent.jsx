import React from 'react';

const MapComponent = () => {
  return (
    <iframe       
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.2015601977788!2d76.93328115798322!3d43.22247141935904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f24c3efee89%3A0xbd6f46a21c2e903f!2z0YPQuy4g0JfQtdC40L3QsCDQqNCw0YjQutC40L3QsCAyNCwg0JDQu9C80LDRgtGLIDA1MDA0NA!5e0!3m2!1sru!2skz!4v1691239081163!5m2!1sru!2skz" 
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
