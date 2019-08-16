import React from 'react'
import './Enterprise.css'
import growthpic from '../../../assets/img/enterprise.jpg'

const growth = (props) => (
    <div>
        <h1 style = {{textAlign:"center",color: "rgb(80, 75, 75)"}}>
        Grow more target accounts for the sales team</h1>
        <div className = "Growth">
        <div className = "card">
            <img src = {growthpic} alt = "growth"/>
            <div className = "context" style = {{textAlign:"initial"}} >
                <h2 style = {{color:"steelblue"}}>TEALIUM</h2>
                <p>
                Using Clearbit Reveal, Tealium personalizes their
                 website and landing pages based on the visitor's 
                 industry and location, increasing conversion and 
                 providing a tailored experience for every lead.
                </p>
            </div>

        </div>
        <div className = "grid">
            <div className = "Frame">
                <div className = "Title">Focus on more meaningful KPIs.</div>
                <p>
                Frame.io made half a million dollars in ARR
                by creating a personalized flow for new trial signups based on company size.
                </p>
            </div>
            <div className = "Gong">
                <div className = "Title">Clearbit is our source of truth</div>
                <p>
                Gong increased demo requests by 5x, generated hundreds of qualified 
                opportunities, and accelerated deals by fast-tracking best-fit leads.
                </p>
                
            </div>

        </div>
    </div>
    </div>
)

export default growth;