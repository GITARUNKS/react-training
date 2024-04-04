import { useState } from "react";
import RecommendedShow from "./RecommendedShow";

interface IShow {
    id: number;
    title: string;
    thumbnailUrl: string;
    category: string;
    publishedOn: string;
    description: string;
    isInWatchList: boolean;
}

const RecommendedShowList: React.FC = () => {
    const [shows, setShows] = useState<IShow[]>([
        {
            id: 66456364,
            title: "PlanetEarth II",
            thumbnailUrl:
                "https://placehold.co/400x300/00ffff/000?text=PlanetEarth-II",
            category: "Infotainment",
            publishedOn: "1 day ago",
            description: "BBC Earth's documentary lorem ipsum something ....",
            isInWatchList: false,
        },
        {
            id: 6547456756,
            title: "Random Movie",
            thumbnailUrl: "https://placehold.co/400x300/ff00ff/000?text=RandomMovie",
            category: "Infotainment",
            publishedOn: "4 days ago",
            description: "Random show ipsum something sdg s sd....",
            isInWatchList: false,
        },
        {
            id: 3452354,
            title: "Ronaldo - The Legend",
            thumbnailUrl:
                "https://placehold.co/400x300/cfcfcf/000?text=Ronaldo-TheLegend",
            category: "Sports",
            publishedOn: "1 year ago",
            description: "a show on legendary footballer Ronaldo...",
            isInWatchList: false,
        },
        {
            id: 3452357,
            title: "The Elephant Whisperer",
            thumbnailUrl:
                "https://placehold.co/400x300/cfcfcf/000?text=The+Elephant+Whisperer",
            category: "Documentry",
            publishedOn: "15 months ago",
            description: "Oscar winning documentary about Elephants in Lower camp...",
            isInWatchList: false,
        },
    ]);

    const handleManageWatchlist = (index: number) => {
        //Updating state immutably.
        const duplicateShows = [...shows] //Use spread operator for getting duplicate
        duplicateShows[index].isInWatchList = !duplicateShows[index].isInWatchList;
        setShows(duplicateShows);
    }

    //Condition rendering outing JSX
    if (shows && shows.length == 0) {
        return (
            <div className="alert alert-warning" role="alert">
                No Recommend videos found! Try watching more videos to come up with new recommendations based on your interest.
            </div>
        );
    }

    return (
        <div className="row">
            {shows.map((show: IShow, index: number) => {
                return (
                    <RecommendedShow 
                        show = {show}
                        handleManageWatchlist = {handleManageWatchlist}
                        index = {index}
                        key={show.id}
                    />
                )})
            }
        </div>
    );
}

export default RecommendedShowList;