import React, { Component } from 'react';
import JOB_EXPERIENCES from '../data/experience';
import notFound from '../images/not-available.png';


const Experience = props => {
    const {name, joiningDate, currentCompany, imgUrl, url, expTime, posts} = props.experience;
    let totExpWithCompany = 0;
    if(currentCompany) {
        totExpWithCompany = props.getDateDiffInYears(joiningDate);
    } else {
        totExpWithCompany = expTime;
    }
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
                <h5>{totExpWithCompany} Years</h5>
                {
                    posts.map(post => (
                        <div key={post.pId}>
                            {
                                <div style={{padding: 10, borderRight: "5px solid grey"}}>
                                    <h4>{post.postName}</h4>
                                    <h5>{post.duration}</h5>
                                    {
                                        post.current?
                                        <h6>{props.getDateDiffInYears(post.startDate)} Years</h6>
                                        :
                                        <h6>{post.time}</h6>
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


class ExperienceData extends Component  {

    state = {display: false};


    getDateDiffInYears = inpDate => {
        console.log("inpData ", inpDate);
        let dateArr = inpDate.split("-");
        let jDate = new Date(dateArr[2], dateArr[1] -1, dateArr[0]);
        console.log("jDate ", new Date(jDate));
        let totPeriod = (new Date()).getTime() - jDate;
        console.log("jDate  ", jDate);
        console.log("totPeriod  ", totPeriod);
        totPeriod /= (1000 * 60 * 60 * 24 * 365);
        totPeriod = Math.round(totPeriod * 100) / 100;
        return totPeriod;
    }

    toggleDisplayState = () => {
        console.log(this.state.display);
        this.setState({display: !this.state.display});
    }

    render() {
        return (

            <div>
                <div className="d-flex justify-content-between align-middle" onClick={this.toggleDisplayState} style={{cursor: 'pointer'}}>
                    <h2>Experience</h2>
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
                            JOB_EXPERIENCES.map(EXP => (
                                    <Experience key={EXP.id} experience={EXP} getDateDiffInYears={this.getDateDiffInYears}/>
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

export default ExperienceData;