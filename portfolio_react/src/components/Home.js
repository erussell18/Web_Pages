import React from "react";
import {Link} from 'react-router-dom';
import Navigation from "./Navigation"
import Footer from "./Footer"

function Home(){
    return(
        <body>
            <header>
                <Navigation />
            </header>

            <section id="WelcomeSection">
                <article>
                    <div class="Container">
                        <h1>Welcome</h1>
                        <p>While viewing this site you will be able to learn about me and check out some of my work.</p>
                    </div>
                </article>
            </section>

            <section>
                <article>
                    <div class="Container">
                        <div class="Skills">

                            <div id="WebDev">
                                <h2>Web Development</h2>
                                <p>I have a strong interest in Web Development, the last 3 years in my university has been spent learning and doing projects that interest me.</p>

                            </div>

                            <div id="WebDes">
                                <h2>Web Design</h2>
                                <p>Along with web development, I have had fun using Adobe XD to design and plan for the websites and apps that I create.</p>
                            </div>

                            <div id="GraphicDes">
                                <h2>Graphic Design</h2>
                                <p>For four years I have been doing graphic design using adobe photoshop to make posters and flyers for my school.</p>

                            </div>

                        </div>

                    </div>
                </article>
            </section>

            <footer>
                <Footer />
            </footer>
            
        </body>
    )
}

export default Home;