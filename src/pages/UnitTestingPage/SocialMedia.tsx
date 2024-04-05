import { useState } from "react";

interface SocialMediaProps{
    name: string;
    followersCount: string;
}

const SocialMedia: React.FC<SocialMediaProps> = (props) => {
    const [countryName, setCountryName] = useState('India');
  return (
    <div>
        <h2 role="heading" className="text-center">Social Media Info</h2>
        <h3>Demo of Testing Props, States, Events, JSX, Styles, Snapshot testing !!!</h3>
        <p> Top social media platform</p>
        <p data-testid="followersDetails" style={{backgroundColor: '#ffff00'}}>{props.name} with {props.followersCount} followers</p>

        <input type="text" name="countryName" placeholder="Enter a country name" value={countryName} onChange={(event) => {
            setCountryName(event.target.value);
        }}/>
        <p data-testid="websiteInfo">Visit Genesys {countryName} website</p>
    </div>
  )
}

export default SocialMedia