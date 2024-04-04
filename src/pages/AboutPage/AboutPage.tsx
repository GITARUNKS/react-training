import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import genesysImage from "../../assets/genesys.png";
import { IAboutCard } from "../../models/AboutCardTypes";
import AboutCard from "./AboutCard";
import Localized from "./Localized";

const AboutPage: React.FC = () => {

  const aboutCards = [
    {
      id: 1,
      header: "What to join us?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto at molestias corrupti iure necessitatibus sint pariatur, quod quos recusandae minus laboriosam a blanditiis, nihil laudantium vitae error ab vel?",
      navigateTo: "/about-us/careers",
      title: "Careers"
    },
    {
      id: 2,
      header: "Interested in knowing what we do?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto at molestias corrupti iure necessitatibus sint pariatur, quod quos recusandae minus laboriosam a blanditiis, nihil laudantium vitae error ab vel?",
      navigateTo: "/about-us/team",
      title: "Team",
    },
    {
      id: 3,
      header: "What to join us?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto at molestias corrupti iure necessitatibus sint pariatur, quod quos recusandae minus laboriosam a blanditiis, nihil laudantium vitae error ab vel?",
      navigateTo: "/about-us/history",
      title: "History",
    }
  ];

  return (
    <>
      <Helmet>
        <title>About US</title>
      </Helmet>
      <div className="my-3">
        <div className="position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5">
          <img src={genesysImage} height="180" />
          <p className="col-lg-6 mx-auto mb-4">
            Genesys is trusted by over 11,000 companies around the world.
          </p>
        </div>
      </div>
      <div className="px-2 py-2 my-3 text-center">
        <div className="row">
          {aboutCards.map((aboutCard: IAboutCard) => {
            return (
              <AboutCard
                header={aboutCard.header}
                body={aboutCard.body}
                navigateTo={aboutCard.navigateTo}
                title={aboutCard.title}
                key={aboutCard.id}
              />
            )
          })
          }
        </div>
        <Outlet />
        <h1>Demo for i18n and l10n</h1>
        <Localized />
      </div>
    </>
  )
}

export default AboutPage