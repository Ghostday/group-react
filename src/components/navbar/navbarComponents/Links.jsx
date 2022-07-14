
export default function Links(props){
    console.log(props.things)
    return(
        <div className="links">
            {props.things.map((value, index) => {
                return (
                    <a key={index} href="/" className="nav-link">
                        {value}
                    </a>
                )
            })}
        </div>
    )
}