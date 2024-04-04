interface IShow {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  isInWatchList: boolean;
}

interface IShowCards {
    show: IShow;
    handleManageWatchlist: (index: number) => void;
    index: number;
}

const RecommendedShow: React.FC<IShowCards> = ({show, handleManageWatchlist, index}) => {
  return (
    <>
      {/*  List a.k.a Looping */}
      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{show.title}</h5>
            <p className="card-text">{show.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{show.category}</li>
            <li className="list-group-item">{show.publishedOn}</li>
          </ul>
          <div className="card-body">
            <button
              className="btn btn-success"
              onClick={
                () => handleManageWatchlist(index) //Passing param to event handler
              }
            >
              {/* Conditional rendering inside JSX */}
              {show.isInWatchList
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedShow;
