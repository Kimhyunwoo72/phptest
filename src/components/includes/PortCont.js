import React from "react";

function PortInfo({link, image, title, category}){
    return(
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={title} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont(props){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port_inner">
                    {props.data.map((ports) => (
                        <PortInfo
                            key={ports.title}
                            link={ports.link}
                            image={ports.image}
                            title={ports.title}
                            category={ports.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default PortCont;