import LatestShow from "./LatestShow";
import RecommendedShowList from "./RecommendedShowList";
import Subscription from "./Subscription";
import TrendingShowList from "./TrendingShowList";
import { Helmet } from "react-helmet-async";

const NetflixPage: React.FC = () => {
  return (
    <>
    <Helmet>
        <title>Netflix Home</title>
    </Helmet>
    <div>
      <h1>Welcome to Netflix App</h1>
      <h2>Latest Show | Props Demo</h2>

      <div className="row">
        <div className="col-md-3">
          <LatestShow
            title="The Godfather II"
            thumbnailUrl="https://placehold.co/300x220?text=The+Godfather+III"
            category="Classic Movies"
            publishedOn="a day ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. unde
            praesentium qui nemo libero odit quo ullam pariatur. Ad vero
            aspernatur ullam neque
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="Money Heist"
            thumbnailUrl="https://placehold.co/300x220?text=Money+Heist"
            category="Series"
            publishedOn="a year ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. unde
            praesentium qui nemo libero odit quo ullam pariatur. Ad vero
            aspernatur ullam neque.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="IPL Live"
            thumbnailUrl="https://placehold.co/300x220?text=IPL+Live"
            category="Sports"
            publishedOn="Coming soon"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. unde
            praesentium qui nemo libero odit quo ullam pariatur. Ad vero
            aspernatur ullam neque.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="CWC-5"
            thumbnailUrl="https://placehold.co/300x220?text=CWC5"
            category="Television Show"
            publishedOn="Coming soon"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. unde
            praesentium qui nemo libero odit quo ullam pariatur. Ad vero
            aspernatur ullam neque.
          </LatestShow>
        </div>
      </div>
      
      <hr />
      <h2>Trending Shows | Props, States and Events Demo</h2>
      <TrendingShowList />

      <hr />
      <h2>Recommended Shows | Props, States, Events, List & Keys and Conditional Rendering Demo</h2>
      <RecommendedShowList />

      <hr />
      <h2>Subscription | Styling Demo</h2>
      <Subscription />
    </div>
    </>
  );
};

export default NetflixPage;
