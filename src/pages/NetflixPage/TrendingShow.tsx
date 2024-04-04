interface TrendingShowProps {
  id: string | number;
  trendingRank: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  isInWatchlist: boolean;
  children: string;
}

const TrendingShow: React.FC<TrendingShowProps> = ({
  title,
  trendingRank,
  thumbnailUrl,
  isInWatchlist,
  ...props
}) => {
  return (
    <div className="card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title} <span className="badge text-bg-info">Rank #{trendingRank}</span></h5>
        <p className="card-text">{props.children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.category}</li>
        <li className="list-group-item">{props.publishedOn}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-dark"> {isInWatchlist ? "In Watchlist" : "Add to Watchlist"} </button>
      </div>
    </div>
  );
};

export default TrendingShow;
