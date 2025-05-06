import bladeRunnerImg from "../../assets/movies/bladerunner.jpg";

function FavoritesCard() {
    return (
        <>
<div className="top-movies__card">
                    <div className="top-movies__card-padding">
                        <img src={bladeRunnerImg} alt="" />
                        <div className="top-movies__card-info">
                            <div className="top-movies__card-info-title">
                                <p>Blade Runner 2049</p>
                                <p>Ridley Scott</p>
                            </div>
                            <div className="top-movies__card-info-description">
                                <p>Film</p>
                                <p>2019</p>
                                <p>180m</p>
                                <p>9.1</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default FavoritesCard