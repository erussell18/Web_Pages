import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

function About(){
    return(
        <body>
            <header>
                <Navigation />
            </header>

            <section id="AboutContent">
                <article id="Contact">
                    <aside>
                        <h2>Contact Me</h2>
                        <p>Email: eddierussell18@gmail.com</p>
                        <p>Phone: 201-892-2729</p>
                        <p><a href="https://github.com/erussell18" id="GitHubLink">GitHub</a></p>
                    </aside>
                </article>
            </section>
                
            <footer>
                <Footer />
            </footer>
        </body>
    )
}
export default About