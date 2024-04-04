import careerImage from "../../assets/career.svg";

const CareersPage = () => {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img src={careerImage} height="180" />
            <h1 className="display-5 fw-bold text-body-emphasis">Careers</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, nemo ea esse aut accusantium, ullam et, temporibus culpa odit molestias beatae placeat at exercitationem. Odio ad amet assumenda nam culpa?
                </p>
            </div>
        </div>
    )
}

export default CareersPage