import { useState } from "react"; //importing hook (nothing but functions programmed already)
import TrendingShow from "./TrendingShow";

const TrendingShowList: React.FC = () => {
  // state - a component wide updatable data
  const [resolution, setResolution] = useState("HD");
  console.log(resolution); //useState will return first argument - getter value
  //console.log(setResolution); //userState will return second argument - Setter method to change the first value

  const shows = [
    {
      id: 555,
      trendingRank: 1,
      title: "Manjummel Boys",
      thumbnailUrl: "https://placehold.co/300x220?text=Manjummel+Boys",
      category: "Movie",
      publishedOn: "10 days ago",
      isInWatchlist: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut fugiat quos accusantium repellat odit laboriosam Voluptatibus!"
    },
    {
      id: 556,
      trendingRank: 2,
      title: "Premalu",
      thumbnailUrl: "https://placehold.co/300x220?text=Premalu",
      category: "Movie",
      publishedOn: "7 days ago",
      isInWatchlist: true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut fugiat quos accusantium repellat odit laboriosam Voluptatibus!"
    },
    {
      id: 557,
      trendingRank: 3,
      title: "Captain Miller",
      thumbnailUrl: "https://placehold.co/300x220?text=Captian+Miller",
      category: "Movie",
      publishedOn: "20 days ago",
      isInWatchlist: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut fugiat quos accusantium repellat odit laboriosam Voluptatibus!"
    },
    {
      id: 558,
      trendingRank: 4,
      title: "Salaar",
      thumbnailUrl: "https://placehold.co/300x220?text=Salaar",
      category: "Movie",
      publishedOn: "20 days ago",
      isInWatchlist: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut fugiat quos accusantium repellat odit laboriosam Voluptatibus!"
    },
  ];
  
  //event handler function
  // const handleSwitchResolution = () => {
  //   console.log("Clicked");
  //   setResolution((prevResolution) => {
  //     if (prevResolution == "HD"){
  //       return "4K";
  //     }else{
  //       return "HD";
  //     }
  //   });
  // };

  return (
    <div className="row">
      <h3>
        Enjoy watching the shows in {resolution} |{" "}
        <button
          className="btn btn-sm btn-warning"
          onClick={() =>
            setResolution((prevResolution) =>
              prevResolution == "HD" ? "4K" : "HD"
            )
          }
        >
          Switch to {resolution == "HD" ? "4K" : "HD"}
        </button>
      </h3>
      <div className="col-md-3">
        <TrendingShow
          id = {shows[0].id}
          trendingRank = {shows[0].trendingRank}
          thumbnailUrl = {shows[0].thumbnailUrl}
          title = {shows[0].title}
          category = {shows[0].category}
          publishedOn = {shows[0].publishedOn}
          isInWatchlist = {shows[0].isInWatchlist}
        >
          {shows[0].description}
        </TrendingShow>
        </div>
      <div className="col-md-3">
      <TrendingShow
          id = {shows[1].id}
          trendingRank = {shows[1].trendingRank}
          thumbnailUrl = {shows[1].thumbnailUrl}
          title = {shows[1].title}
          category = {shows[1].category}
          isInWatchlist = {shows[1].isInWatchlist}
          publishedOn = {shows[1].publishedOn}
        >
          {shows[1].description}
        </TrendingShow>
      </div>
      <div className="col-md-3">
      <TrendingShow
          id = {shows[2].id}
          trendingRank = {shows[2].trendingRank}
          thumbnailUrl = {shows[2].thumbnailUrl}
          title = {shows[2].title}
          category = {shows[2].category}
          isInWatchlist = {shows[2].isInWatchlist}
          publishedOn = {shows[2].publishedOn}
        >
          {shows[2].description}
        </TrendingShow>
      </div>
      <div className="col-md-3">
      <TrendingShow
          {...shows[3]}
        >
          {shows[3].description}
        </TrendingShow>
      </div>
    </div>
  );
};

export default TrendingShowList;
