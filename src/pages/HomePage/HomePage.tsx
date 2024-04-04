import homePageImage from "../../assets/loveit.svg";
import { Helmet } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {

    const navigate = useNavigate();
    const handleNavigation = (page: string) => {
        navigate(page);
    };

    return (
        <>
        <Helmet>
            <title>Welcome to Home</title>
        </Helmet>
        <div className="px-4 py-5 my-5 text-center">
            <img src={homePageImage} height="180" />
            <h1 className="display-5 fw-bold text-body-emphasis">React App</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, nemo ea esse aut accusantium, ullam et, temporibus culpa odit molestias beatae placeat at exercitationem. Odio ad amet assumenda nam culpa?
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" onClick={()=>{handleNavigation('/netflix')}} className="btn btn-primary btn-lg px-4 gap-3">Browse Netflix</button>
                    <button type="button" onClick={()=>{handleNavigation('/users')}} className="btn btn-outline-secondary btn-lg px-4">Manage Users</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage