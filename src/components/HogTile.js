import React, { useState } from "react";

function HogTile({ name, image, specialty, weight, greased, highestMedal, hideHog }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleTileClick = () => {
        setShowDetails((prevShowDetails) => !prevShowDetails);
    };

    return (
        <div className="pigTile minPigTile" onClick={handleTileClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} className="TwirlyPig" />
            {showDetails && (
                <div className="details">
                    <p><strong>Specialty:</strong> {specialty}</p>
                    <p><strong>Weight:</strong> {weight}</p>
                    <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
                    <p><strong>Highest Medal Achieved:</strong> {highestMedal}</p>
                </div>
            )}
            <button onClick={(e) => { 
                e.stopPropagation(); 
                hideHog(name); 
            }}>
                Hide
            </button>
        </div>
    );
}

export default HogTile;
