export default function Portfolio(){
    return(
        <div className="container portfolio-container-spacing">
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7">
                    <h2 className="fw-normal lh-1 center">DTC Solutions <span className="text-body-secondary">Diagnostic Trouble Code Search</span></h2>
                </div>
                <div className="col-md-5">
                    <a href="https://jacob-kachmarek.github.io/dtc-solutions/">
                        <img className="img-fluid mx-auto portfolio-image" src="dtc-solutions.png"></img>
                    </a>
                </div>
            </div>
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7 order-md-2">
                    <h2 className="fw-normal lh-1 center">Whack: Project Platform <span className="text-body-secondary">Share your ideas</span></h2>
                </div>
                <div className="col-md-5 order-md-1">
                    <a href="https://blooming-beyond-30251-89ceb9e97d3f.herokuapp.com/">
                        <img className="img-fluid mx-auto portfolio-image" src="wack-homepage.png"></img>
                    </a>
                </div>
            </div>
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7">
                    <h2 className="fw-normal lh-1 center">Jate <span className="text-body-secondary">Downloadable Text-Editor</span></h2>
                </div>
                <div className="col-md-5">
                    <a href="https://immense-cliffs-98812-bb8888d71273.herokuapp.com/">
                        <img className="img-fluid mx-auto portfolio-image" src="jate.png"></img>
                    </a>
                </div>
            </div>
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7 order-md-2">
                    <h2 className="fw-normal lh-1 center">Password Generator <span className="text-body-secondary">Creates random password</span></h2>
                </div>
                <div className="col-md-5 order-md-1">
                    <a href="https://jacob-kachmarek.github.io/generate-password/">
                        <img className="img-fluid mx-auto portfolio-image" src="password-gen.png"></img>
                    </a>
                </div>
            </div>
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7">
                    <h2 className="fw-normal lh-1 center">Work Day Scheduler <span className="text-body-secondary">Plan your day</span></h2>
                </div>
                <div className="col-md-5">
                    <a href="https://jacob-kachmarek.github.io/work-day-scheduler/">
                        <img className="img-fluid mx-auto portfolio-image" src="work-day.png"></img>
                    </a>
                </div>
            </div>
            <div className="row featurette portfolio-container-spacing">
                <div className="col-md-7 order-md-2">
                    <h2 className="fw-normal lh-1 center">Weather Checker <span className="text-body-secondary">Weather reports</span></h2>
                </div>
                <div className="col-md-5 order-md-1">
                    <a href="https://jacob-kachmarek.github.io/weather-app/">
                        <img className="img-fluid mx-auto portfolio-image" src="weather-checker.png"></img>
                    </a>
                </div>
            </div>
        </div>  
    )
}