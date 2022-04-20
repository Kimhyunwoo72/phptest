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


// function PortCont() {
//     return (
//         <section className="port__cont">
//         <div className="container">
//             <div className="port_inner">
//                 {props.map(data => (
//                     <PortItem 
//                     />
//                 ))}
                
//                 {/* <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio02.jpg" alt="이미지" /></a>
//                         <div className="text">
//                         <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio03.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio04.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio05.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio06.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio07.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio08.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio09.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio10.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio11.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article>
//                 <article className="port__item">
//                     <figure className="img">
//                         <a href="/"><img src="img/portfolio12.jpg" alt="이미지" /></a>
//                         <div className="text">
//                             <h3>PORTFOLIO <br />HWANG</h3>
//                             <p>PORTFO LIO</p>
//                         </div>
//                     </figure>
//                 </article> */}
                
//             </div>
//         </div>
//         </section>
//     )
// }

export default PortCont;