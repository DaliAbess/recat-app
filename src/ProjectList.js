import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            // Retrieve the token from localStorage
            //const token = localStorage.getItem('authToken');
            const token ="08edb8a1af800e608fcafc3a1c99e5142bf414f9"
            // Set the headers with the token
            const headers = {
                'Authorization': `Token ${token}`
            };

            // Make the request with Axios, including the headers
            const response = await axios.get('https://four-carrots-smoke.loca.lt/api/github/', { headers });
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div style={{backgroundColor:"green"}}>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                       <Link to={`/projects/${project.id}`}>{project.name_repo}</Link>
                
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;