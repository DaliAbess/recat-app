// AddAppartement.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddAppartement.css';
const AddAppartement = () => {
    const [adresse, setAdresse] = useState('');
    const [prix, setPrix] = useState('');
    const [maxPlaces, setMaxPlaces] = useState('');
    const [places, setPlaces] = useState('');
useEffect(()=>{
    const token = "08edb8a1af800e608fcafc3a1c99e5142bf414f9";
    localStorage.setItem("Token",token);

},[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token =localStorage.getItem("Token");
            const headers = {
                'Authorization': `Token ${token}`
            };
            const data = {
                adresse,
                prix,
                max_places: maxPlaces ,
                places:places
            };

            const response = await axios.post('https://warm-moose-train.loca.lt/api/appartements/', data, { headers });
            console.log('Appartement added successfully:', response.data);
            // Optionally, clear the form or redirect the user
        } catch (error) {
            console.error('Error adding appartement:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Adresse:
                <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
            </label>
            <label>
                Prix:
                <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} required />
            </label>
            <label>
                Max Places:
                <input type="number" value={maxPlaces} onChange={(e) => setMaxPlaces(e.target.value)} required />
            </label>
            <label>
                 Places:
                <input type="number" value={places} onChange={(e) => setPlaces(e.target.value)} required />
            </label>
            <button type="submit">Add Appartement</button>
        </form>
    );
};

export default AddAppartement;
