import React, { Component } from 'react';
import EDUCATION from '../data/education';
import notFound from '../images/not-available.png';

const Education = props => {
    const {name, period, degree, field, grade, imgUrl, url} = props.education;
    
    return (
        <div style={{textAlign: 'left', boxShadow: "5px 5px 5px", padding: 20, margin: 10, clear: 'both'}}>
            <div style={{ display: 'inline-block', textAlign: "right", width: '100%'}}>
                {
                    imgUrl!==""?
                    <div style={{float: 'left', padding: 10}}>
                        <a href={url} target="_blank"><img src={imgUrl} alt="profile" style={ {height: 120, width: 120}} /></a>
                    </div>
                    :
                    <div style={{float: 'left', padding: 10}}>
                        <a><img src={notFound} alt="profile" style={ {height: 120, width: 120}} /></a>
                    </div>
                }
                <h3>{name}</h3>
                <h4>
                    {degree}
                    {
                        field!==""?
                            "-" +field
                            :
                            null
                    }
                </h4>
                <h6>{period}</h6>
                <h5>{grade}</h5>
                
            </div>
        </div>
    )
}


class EducationData extends Component  {

    state = {display: false};

    toggleDisplayState = () => {
        console.log(this.state.display);
        this.setState({display: !this.state.display});
    }

    render() {
        return (

            <div>
                <div className="d-flex justify-content-between align-middle" onClick={this.toggleDisplayState} style={{cursor: 'pointer'}}>
                    <h2>Education</h2>
                    {
                        !this.state.display?
                        <i className="far fa-plus-square" style={{fontSize: '36px'}}></i>
                        :
                        <i className="far fa-minus-square" style={{fontSize: '36px'}}></i>
                    }
                </div>
                {
                    this.state.display?
                    <div style={{width: '60%' ,margin: 'auto'}}>
                        {
                            EDUCATION.map(EDU => (
                                    <Education key={EDU.id} education={EDU}/>
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

export default EducationData;