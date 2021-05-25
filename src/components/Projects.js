import React from 'react';
import PROJECTS from '../data/projects';

const Project = props =>{
        const {title, image, description, link, descPoints, descHeader} = props.project;
        console.log(title);
        return (
            <div style={{display: 'inline-flex', width: 300, margin: 10}}>
                <div>
                    <h3>{title}</h3>
                    <img src={image} alt="profile" style={ {height: 120, width: 200}} /><br/><br/>
                    <p>{description}</p>
                    {
                        descHeader!==''? <h6>{descHeader}</h6>:<br/>
                    }
                    <ul>
                        {
                            descPoints.map(descPt => (
                                <li>{descPt}</li>
                            ))
                        }
                    </ul>
                    <a href={link}>Click here</a> to go to the project. 
                </div>
            </div>
        )
}


const Projects = () => (

    <div>
        <h2>Highlighted Projects</h2>
        <div style={{width: 'fit-content' ,margin: 'auto'}}>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT}/>
                ))
            }
        </div>
    </div>
)

export default Projects;