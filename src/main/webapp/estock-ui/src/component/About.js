import React, {Component} from "react";
import {Link} from "react-router-dom";
import dthlogo from '../dthlogo.jpeg';

class About extends Component {

    render() {
        return (<div className="AboutContact">
            <body>
            <nav>
                <input type="checkbox"
                          id="check" />
                <label htmlFor = "check"
                    className = "checkBtn" >
                <i className="fas fa-bars" />
                </label>
            <label className="logo"> Dogra Trading Hub </label>
                    <ul>
                        <li>< Link to="/"> Home </Link></li>
                        <li>< Link to="/About"> About </Link></li>
                        <li>< Link to="/Contact"> Contact </Link></li>
                    </ul>
            </nav>
            <div className="About">
                <p> 
                    <h2>Stock Market</h2> 
                    It is a place where people buy/sell shares of the publicaly listed companies. There are two main stock exchanges in India where majority of the trades take place - Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). Dogra Trading Hub provides you the solution to solve all your issues and queries at a single place. It provides you the best stock exchange experience in India.
                 </p>
                <div className="About">
                    <div className="companylogo" align="center">
                                <img src={dthlogo}/>
                     </div>
                    
                    
                </div>

                </div>
            </body>
        </div>
)
}
}export default About