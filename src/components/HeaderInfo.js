import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../navbar.css';

class HeaderInfo extends Component {


    state = {fullname: '', userId: -1, username: "", isAdmin: "N"}

    saveUserData = (json) => {
        const {fullname, userId, username, isAdmin} = json;
        console.log(this.props);
        this.setState({fullname, userId, username, isAdmin});
    }

    componentDidMount() {
        const reqOptions = {
            method: "post",
            headers: {
                 "Content-Type": "application/json"
            }
        }
        fetch("/api/v1/session/getSessionData", reqOptions)
            .then(response => response.json())
            .then(json => this.saveUserData(json))
            .catch(error => console.log(error));
    }

    render() {
        // console.log(this.props);
        let {fullname, userId, username, isAdmin} = this.state;
        const profileId = "/userInfo?userId=" + userId;
        
        console.log("Carts ", this.props);
        return(
            <div>
                <div className="jumbotron jumbotron-fluid login" style={{padding: "5px"}}>
                    
                    <div className="d-flex justify-content-between">
                        <div className="" align="center" style={{padding: "10px", fontFamily: "fantasy"}}>
                            <a href="/" style={{textDecoration: "none", color: "white"}}><h1>InfoTrends.in</h1></a>
                        </div>
                        <div className="" align="center" style={{padding: "10px", right: 0, position: 'absolute'}}>
                            <a href="/authenticate/logout" className="linkbutton">LOGOUT</a>
                        </div>
                    </div>

                </div>

                <nav className="navbar navbar-expand-md navbar-transparent navbar-topcss">
                    <a href="/" className="navbar-brand"><img src="/assets/images/logo.jpg" style={{height: "40px", width: "40px"}} /></a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"><i style={{fontSize:"24px"}} className="fa">&#xf0c9;</i></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href={profileId} className="nav-item nav-link">Profile</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Articles</a>
                                <div className="dropdown-menu">
                                    <a href="/membersdashboard/createNewArticle" className="dropdown-item">Create Article</a>
                                    <a href="#" className="dropdown-item">View Articles</a>
                                </div>
                            </div>
                                {
                                    (typeof isAdmin !== 'undefined' && isAdmin === 'Y')?
                                    (
                                        <div style={{width:"fit-content"}}>
                                            <a href="/membersdashboard" className="nav-item nav-link" style={{display: 'inline-block'}}>Members Home</a>
                                            <div className="nav-item dropdown" style={{display: 'inline-block'}}>
                                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Manage Users</a>
                                                <div className="dropdown-menu">
                                                    <a href="/adminsdashboard/addNewUser" className="dropdown-item">Add New User</a>
                                                    <a href="/adminsdashboard/displayUsers" className="dropdown-item">Display Users</a>
                                                </div>
                                            </div>
                                        </div>
                                    ):null
                                }
                            <Link to="/retailApp/cart" style={{whiteSpace: "nowrap"}} className="nav-item nav-link">
                                <i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;
                                Shopping App
                            </Link> 
                            <Link to="/about-me" className="nav-item nav-link">About Me</Link>
                            <Link to="/about-me/jokes" className="nav-item nav-link">Jokes</Link>
                            <Link to="/about-me/musicMatch" className="nav-item nav-link">Music Master</Link>
                            <Link to="/about-me/reminderPro" className="nav-item nav-link">Reminder Pro</Link>
                        </div>
                        
                    </div>
                </nav>	

                <form className="form-inline" style={{right: 0, padding: 20, display: 'flex', justifyContent: 'flex-end' }} action="/search?pgNo=1">
                    <div className="input-group">                    
                        <input type="text" className="form-control search-bar" name="query" placeholder="Search" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-warning"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

  
export default HeaderInfo;