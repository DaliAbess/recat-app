import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './ReservationList.css'; // Import the CSS file

const ReservationList = () => {
    const [appartements, setAppartements] = useState([]);

    useEffect(() => {
        fetchAppartements();
    }, []);

    const fetchAppartements = async () => {
        try {
            const token = "08edb8a1af800e608fcafc3a1c99e5142bf414f9";
            const headers = {
                'Authorization': `Token ${token}`
            };

            const response = await axios.get('https://warm-moose-train.loca.lt/api/appartements/', { headers });
            setAppartements(response.data);
        } catch (error) {
            console.error('Error fetching APPARTS:', error);
        }
    };

    return (
        <div className="reservation-list-container">
            <h2 className="reservation-list-title">Appartements</h2>
            <ul className="reservation-list">
                {appartements.map((appartement) => (
                    <li key={appartement.id} className="reservation-list-item">
                        <Link to={`/apps/${appartement.id}`} className="reservation-list-link">{appartement.adresse}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
