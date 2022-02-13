import { Link } from "react-router-dom"

const TechCards = (props) => {
    let element = props.tech.list.map((item, key) => {
        return (
            <div key={key} className="col-6 col-md-4 col-lg-3 my-3">
                <Link to={`/${item.name.toLowerCase()}`}>
                    <div className="card text-center p-3 m-2 h-100 col justify-content-around">
                        <img className="card-img-top" src={item.img} alt="" />
                        <h3 className="card-text">{item.name}</h3>
                    </div>
                </Link>
            </div>
        )
    })
    return element
}

export default TechCards