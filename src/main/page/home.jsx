import { Link } from "react-router-dom"
import GetTechList from "./techList"

export default function Home() {
    let techList = GetTechList()
    const Header = () => {
        let element = techList.map((item, key) => {
            return (
                <div key={key}>
                    <button type="button" className="btn btn-lg btn-secondary w-100" data-bs-toggle="collapse" data-bs-target={`#collapse${item.type.toLowerCase()}`} aria-expanded="false" aria-controls="collapseItem">{item.type}</button>

                    <div className="collapse multi-collapse my-2 mb-2" id={`collapse${item.type.toLowerCase()}`}>
                        <div className="card card-body">
                            {item.description}
                            <div className="row m-4 align-items-center">
                                <TechCards tech={item} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return element
    }

    const TechCards = (props) => {
        let element = props.tech.list.map((item, key) => {
            return (
                <div key={key} className="col-md-4">
                    <Link to={`/${item.name.toLowerCase()}`} className="m-4">
                        <i className={`${item.icon} fa-8x`} />
                        <h4>{item.name}</h4>
                    </Link>
                </div>
            )
        })
        return element
    }

    return (
        <div className="text-center">
            <h1 className=" my-3">Web Development</h1>
            <p>Here is some popular technology are use for website development</p>

            <div className="row gap-4">
                <Header />
            </div>
        </div>
    )
}