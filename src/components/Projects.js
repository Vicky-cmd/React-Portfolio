import React, { Component } from 'react';
import PROJECTS from '../data/projects';

class Project extends Component{
        state = {displayAll: false};

        render() {
            const {title, image, description, link, descPoints, descHeader} = this.props.project;
            console.log(title);
            let projectDescId = 0;
            let endString = description.length>100?100:description.length;
            const promoDesc = description.substring(0, endString);
            return (
                <div style={{display: 'inline-flex', width: 300, margin: 10}}>
                    <div>
                        <h3>{title}</h3><br/>
                        <img src={image} alt="profile" style={ {height: 120, width: 200}} /><br/><br/>

                        {
                            !this.state.displayAll?
                                <i className="fa fa-plus-circle" onClick={() => {this.setState({displayAll: true})}} style={{float: 'right', color: 'white', fontSize: '24px',cursor: 'pointer'}}></i>
                                :
                                <i className="fa fa-minus-circle" onClick={() => {this.setState({displayAll: false})}} style={{float: 'right', color: 'white', fontSize: '24px', cursor: 'pointer'}}></i>
                        }
                        {
                            this.state.displayAll?
                            <div>
                            <p>{description}</p>
                            {
                                descHeader!==''? <h6>{descHeader}</h6>:<br/>
                            }
                            <ul>
                                {
                                    descPoints.map(descPt => (
                                        <li key={projectDescId++}>{descPt}</li>
                                    ))
                                }
                            </ul>
                            <a href={link}>Click here</a> to go to the project.
                            <br /><button className='btn' onClick={() => {this.setState({displayAll: false})}}>Read Less</button>
                            </div>
                            :
                            <div>
                                {promoDesc} ...
                                <br />
                                <button className='btn' onClick={() => {this.setState({displayAll: true})}}>Read More</button>
                            </div>
                        } 
                    </div>
                </div>
            )
        }
}


class Projects  extends Component {

    state = {display: false};

    toggleDisplayState = () => {
        console.log(this.state.display);
        this.setState({display: !this.state.display});
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between align-middle" onClick={this.toggleDisplayState} style={{cursor: 'pointer'}}>
                    <h2>Highlighted Projects</h2>
                    {
                        !this.state.display?
                        <i className="far fa-plus-square" style={{fontSize: '36px'}}></i>
                        :
                        <i className="far fa-minus-square" style={{fontSize: '36px'}}></i>
                    }
                </div>
                {
                    this.state.display?
                    <div style={{width: 'fit-content' , margin: 'auto', marginTop: 20}}>
                        {
                            PROJECTS.map(PROJECT => (
                                    <Project key={PROJECT.id} project={PROJECT}/>
                            ))
                        }
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Projects;