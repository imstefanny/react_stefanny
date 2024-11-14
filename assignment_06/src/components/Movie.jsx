function Movie({ image, title }) {
    return (
        <div style={{ width: "20%" }} className="p-3">
            <div className="card">
                <img src={image} className="card-img-top object-fit-cover" alt={title} style={{ height: "200px" }} />
                <div className="card-body movie-color">
                    <p className="card-text text-white text-center">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie;
