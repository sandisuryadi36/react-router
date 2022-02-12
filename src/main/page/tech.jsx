export default function Tech(props) { 
    return (
        <div className="my-3 text-center">
            <i className={`${props.item.icon} fa-8x`} />
            <h2>{props.item.name}</h2>
            <p>URL: <a href={props.item.url}>{props.item.url}</a></p>
            <p>{props.item.description}</p>
        </div>
    )
}