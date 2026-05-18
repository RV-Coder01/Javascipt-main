export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} alt={props.title} className="main-image"></img>
            </div>
            <div>
                <img src="./images/marker.png" alt="marker" className="marker-image"></img>
                <span>{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps!</a>
                <h2>{props.title}</h2>
                <p>{props.startDate}-{props.endDate}</p>
                <p>{props.description}</p>
            </div>

        </article>
    )
}
/* <article>
            {/* <img src={entryData.img.src} alt={entryData.description}></img>
            <h3>{entryData.owner.name}</h3> 
        //     <div>
        //         <img></img>
        //         <span>{props.owner.number}</span>
        //     </div>
        //     <div>
        //         <img></img>
        //         <span>{props.owner.email}</span>
        //     </div>
        // </article> */