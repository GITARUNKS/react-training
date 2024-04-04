import { Link } from "react-router-dom"
import { IAboutCard } from "../../models/AboutCardTypes"

const AboutCard: React.FC<IAboutCard> = (aboutCard: IAboutCard) => {

    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    {aboutCard.header}
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {aboutCard.body}
                    </p>
                    <Link to={aboutCard.navigateTo} className="btn btn-primary">{aboutCard.title}</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutCard