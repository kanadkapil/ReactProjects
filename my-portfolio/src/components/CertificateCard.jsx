import React from 'react';

const CertificateCard = ({ certificate }) => {
  return (
    <div>
      <h4>{certificate.title}</h4>
      <p>{certificate.issuer}</p>
    </div>
  );
};

export default CertificateCard;
