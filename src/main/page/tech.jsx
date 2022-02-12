export default function Tech(props) { 
    return (
        <div className="my-3 text-center">
            <i className={`${props.item.icon} fa-8x`} />
            <h2>{props.item.name}</h2>
            <p>URL: <a href={props.item.url}>{props.item.url}</a></p>
            <p>{props.item.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur autem eaque possimus totam excepturi dolores a harum earum praesentium quidem soluta perferendis at perspiciatis suscipit dignissimos ipsum sequi, laboriosam doloribus voluptatibus vitae? Sit doloribus debitis, voluptas adipisci, nam ut dignissimos obcaecati quam accusamus assumenda nulla molestias voluptatum eligendi qui.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus saepe veniam ducimus eveniet numquam dignissimos officiis illo nemo voluptatibus mollitia!</p>
        </div>
    )
}