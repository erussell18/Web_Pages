import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Acme_Web from "./Acme_Pic.png"
import { Link } from "react-router-dom"
/*import SurveyForm from "./Survey_Form.jpg"
import TimeSheet from "./TimeSheet.jpg"
import TributePage from "./TributePic.png"*/

function Portfolio(){
    return(
            <body>
                <header>
                    <Navigation />
                </header>

                <section id="PortWelcomeSection">
                    <article>
                        <div class="Container">
                            <h1>Portfolio</h1>
                            <p>On this page you can view and go to the websites and apps that I created.</p>
                        </div>
                    </article>
                </section>

                <section class="Projects">
                    <article id="AcmeWeb">
                        <Link to="./components/WebPages/Acme_WebDesign/Home.html" target="_blank"><img src={Acme_Web} alt="Acme Web Page" /></Link>
                        <h2>Acme Web Design</h2>  
                    </article>

                    <article id="TributePage">
                        <a href="../Tribute_Page/Main.html" target="_blank"></a>
                        <h2>Tribute Page</h2>
                    </article>

                    <article id="SurveyForm">
                        <a href="../Survey_Page/Survey.html" target="_blank"></a>
                        <h2>Survey Form</h2>
                    </article>

                    <article id="ProductLandingPage">
                        <a href="../Product_LandingPage/Home.html" targe="_blank"></a>
                        <h2>Landing Page</h2>
                    </article>

                    <article id="TimeSheetApp">
                        <a href="../TimeSheet/Main.html" targe="_blank"></a>
                        <h2>Time Sheet App</h2>
                    </article>
                </section>

                
                <footer>
                    <Footer />
                </footer>
            </body>
    )
}

export default Portfolio