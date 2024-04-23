import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AppartementDetails.css'; // Import the CSS file

const AppartementDetails = () => {
    const { id } = useParams();
    const [appartement, setAppartement] = useState(null);

    useEffect(() => {
        fetchAppartementDetails();
    }, [id]);

    const fetchAppartementDetails = async () => {
        try {
            const token = "08edb8a1af800e608fcafc3a1c99e5142bf414f9";
            const headers = {
                'Authorization': `Token ${token}`
            };

            const response = await axios.get(`https://warm-moose-train.loca.lt/api/appartements/${id}/`, { headers });
            setAppartement(response.data);
        } catch (error) {
            console.error('Error fetching APPARTMENT details:', error);
        }
    };

    if (!appartement) {
        return <div>Loading...</div>;
    }

    return (
        <div className="appartement-details-container">
            <h2 className="appartement-details-title">{appartement.adresse}</h2>
            <div className="appartement-details-info">
                <label>Price:</label> {appartement.prix}
            </div>
            <div className="appartement-details-info">
                <label>max places:</label> {appartement.max_places}
            </div>
            {/* Add more details as needed */}
        </div>
    );
};

export default AppartementDetails;
