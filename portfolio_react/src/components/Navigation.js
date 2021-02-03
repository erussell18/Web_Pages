import React from "react";
import {Link} from "react-router-dom"

function Navigation(){
    return(
        <header>
                <div class="Container">
                    <div id="Branding">
                    <h1><span class="HeadColor">Eddie</span> Russell</h1>

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Portfolio">Portfolio</Link></li>
                            <li><Link to="/About">About</Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </header>
    )
}

export default Navigation