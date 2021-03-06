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

                    <article id="TributePage">
                        <a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Tribute_Page/Main.html" target="_blank"> <h2>Tribute Page</h2></a>
                    </article>

                    <article id="SurveyForm">
                        <a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Survey_Page/Survey.html" target="_blank"><h2>Survey Form</h2></a>
                    </article>

                    <article id="ProductLandingPage">
                        <a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/Product_LandingPage/Home.html" target="_blank"><h2>Landing Page</h2></a>
                    </article>

                    <article id="TimeSheetApp">
                        <a href="https://eddie-russell-portfolio.s3.us-east-2.amazonaws.com/TimeSheet/Main.html" target="_blank"><h2>Time Sheet App</h2></a>
                    </article>
                </section>

                
                <footer>
                    <Footer />
                </footer>
            </body>
    )
}

export default Portfolio