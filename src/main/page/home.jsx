import TechHeader from "./techHeader"
import GetTechList from "./techList"

export default function Home(props) {

    return (
        <div className="text-center">
            <h1 className=" my-3">Web Development</h1>
            <p>Here is some popular technology are use for website development</p>

            <div className="row gap-4">
                <TechHeader list={GetTechList()} collapse={props.collapse}/>
            </div>
        </div>
    )
}