import React from 'react'

function Deals() {


const Deal = ({ title, description, imageUrl }) => {
  
  return (
    <div className="deal">
      <div className="deal-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="deal-details">
        <h2>{title}</h2>
        <p>{description}</p>

      </div>
    </div>
  );
};
};

export default Deals