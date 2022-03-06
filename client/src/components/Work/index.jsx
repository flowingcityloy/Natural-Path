function Work({serviceData}) {
    console.log(serviceData)
    return(
        <>
            <img className="photos w-100" src={serviceData.image_path} alt={serviceData.alt} />
            <div className="isotope-overlay"> 
                <a href={serviceData.live_link} target="_blank">
                    <span className="lnr lnr-link"></span>
                </a>
                <h3>
                    <a href={serviceData.live_link} target="_blank">
                        {serviceData.title}
                    </a>
                </h3>
                <br />

            </div>
        </>
    )
}

export default Work;