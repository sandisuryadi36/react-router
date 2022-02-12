import { NavLink, useLocation } from "react-router-dom"

export default function Navbar() {
    let menuList = [
        "Home",
        "About",
    ]

    const ShowMenuList = () => {
        let linkNow = useLocation()
        let element = menuList.map((item, index) => {
            let link = "/" + item.toLowerCase()
            if (item === "Home") link = "/"
            return (
                <li key={index} className="nav-item" >
                    <NavLink to={link} className={`/${item.toLowerCase()}` === linkNow.pathname ? "nav-link active" : "nav-link"} >{item.charAt(0).toUpperCase() + item.slice(1)}</NavLink>
                </li>
            )
        })
        return element
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="./">React Router</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <ShowMenuList />
                    </ul>
                </div>
            </div>
        </nav>
    )
}