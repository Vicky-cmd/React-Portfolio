import React, {Component} from 'react';
import SOCIALPROFILES from '../data/socialProfiles'

class Profile extends Component {

    render() {

        const {name, link, icon} = this.props.socialProfile;
        console.log(link);
        return (
            <div style={{ display: 'inline-block'}}>
                <a href={link}><img src={icon} alt={name} style={{width: 25, height: 25, margin: 10}}/></a>
            </div>
        )

    }
}

class SocialProfiles extends Component {

    render() {
        return (
            <div style={{margin: 'auto', width: 'fit-content'}}>
                <h2>Connect To me @</h2>
                {
                    SOCIALPROFILES.map(socialProfile => {
                        return (
                            <Profile key={socialProfile.id} socialProfile={socialProfile} />
                        )
                    })
                }

            </div>
        )
    }
}

export default SocialProfiles;