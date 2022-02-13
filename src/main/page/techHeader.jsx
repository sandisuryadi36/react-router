import { Link, useLocation } from "react-router-dom"
import TechCards from "./techCards"

const TechHeader = (props) => {
    let location = useLocation()
    let element = props.list.map((item, key) => {
        let collapseShow = (props.collapse === item.type.toLocaleLowerCase()) ? "show" : ""

        let headerLink = () => { 
            if (location.pathname === `/${item.type.toLocaleLowerCase()}`) {
                return "/"
            } else {
                return `/${item.type.toLocaleLowerCase()}`
            }
        }
        
        return (
            <div key={key}>
                <Link to={headerLink()}>
                    <button
                        type="button"
                        className="btn btn-lg btn-secondary w-100"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.type.toLowerCase()}`}
                        aria-expanded="false"
                        aria-controls="collapseItem"
                    >
                        {item.type}
                    </button>
                </Link>

                <div className={`collapse multi-collapse my-2 mb-2 ${collapseShow}`} id={`collapse${item.type.toLowerCase()}`}>
                    <div className="card card-body">
                        {item.description}
                        <div className="row m-4 align-items-stretch justify-content-center">
                            <TechCards tech={item} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return element
}

export default TechHeader