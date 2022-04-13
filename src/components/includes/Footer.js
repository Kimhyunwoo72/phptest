import React from "react";

function Footer(props) {
    return (
        <footer id="footer" className={props.color}>
            <div>
                <h4>Email</h4>
                <a href="mailto:ekfvoddl0321@gamil.com">ekfvoddl0321@gamil.com</a>
            </div>
            <div>
                <h4>kakao</h4>
                <a href="#">webstudys</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instargram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Referecne</a></li>
                    <li><a href="/">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
