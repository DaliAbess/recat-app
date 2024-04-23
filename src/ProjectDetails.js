import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";


const ProjectDetails = () => {
    const [project, setProject] = useState([]);
    

    useEffect(() => {
        fetchProject();
    }, []);
    
   
    const fetchProject = async () => {
        try {
            // Retrieve the token from localStorage
            //const token = localStorage.getItem('authToken');
            const token ="dd99cf8a49bc4b7459473b55b8a5f6fd6591943b"
            // Set the headers with the token
            const headers = {
                'Authorization': `Token ${token}`
            };

            // Make the request with Axios, including the headers
            const response = await axios.get('https://four-carrots-smoke.loca.lt/api/github/${projectId}/workflows/', { headers });
            setProject(response.data[0]);
            console.log(response.data[0]);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div style={{backgroundColor:"green"}}>
            <h2>Projects</h2>
            <ul>
               
                    <li > {project.name}
                    </li>
                    <li > {project.id}
                    </li>
            </ul>
        </div>
    );
};

export default ProjectDetails;