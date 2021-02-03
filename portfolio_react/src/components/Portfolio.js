import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"

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
                        <a href="../Acme_webDesign/Home.html" target="_blank"><img src="Acme_Pic.png"></img></a>
                        <h2>Acme Web Design</h2>  
                    </article>

                    <article id="TributePage">
                        <a href="../Tribute_Page/Main.html" target="_blank"><img src="TributePic.png"></img></a>
                        <h2>Tribute Page</h2>
                    </article>

                    <article id="SurveyForm">
                        <a href="../Survey_Page/Survey.html" target="_blank"><img src="Survey_Form.JPG"></img></a>
                        <h2>Survey Form</h2>
                    </article>

                    <article id="ProductLandingPage">
                        <a href="../Product_LandingPage/Home.html" targe="_blank"><img src="Landing-Page.JPG"></img></a>
                        <h2>Landing Page</h2>
                    </article>

                    <article id="TimeSheetApp">
                        <a href="../TimeSheet/Main.html" targe="_blank"><img src="TimeSheet.JPG"></img></a>
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