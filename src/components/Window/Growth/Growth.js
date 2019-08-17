import React from 'react'
import './Growth.css'
import growthpic from '../../../assets/img/growth.jpg'

const growth = (props) => (
    <div>
        <h1 style = {{textAlign:"center",color: "rgb(80, 75, 75)",margin:"40px 0"}}>Drive demand and conversion with automation</h1>
        <div className = "Growth">
        <div className = "card">
            <img src = {growthpic} alt = "growth"/>
            <div className = "context" style = {{textAlign:"initial"}}>
                <h2 style = {{color:"teal"}}>Outreach</h2>
                <p>
                Using Clearbit Reveal, Outreach starts sales conversations earlier (with personalized chat
                 and alerts about high-value prospects) 
                and generates qualified leads with ads that perform 2x better than generic retargeting.
                </p>
            </div>

        </div>
        <div className = "grid">
            <div className = "Frame">
                <div className = "Title"><span className = "big">$500K</span> in ARR </div>
                <p>
                Frame.io made half a million dollars in ARR
                by creating a personalized flow for new trial signups based on company size.
                </p>
            </div>
            <div className = "Gong">
                <div className = "Title"><span className = "big">70%</span> lift in form conversions </div>
                <p>
                Gong increased demo requests by 5x, generated hundreds of qualified 
                opportunities, and accelerated deals by fast-tracking best-fit leads.
                </p>
                
            </div>
            <div className = "Prosify">
                <div className = "Title">Automate key workflows</div>
                <p>
                We needed to automatically identify the leads that fit closer to our 
                ideal customer persona instead of manually sorting through hundreds of leads every day.
                Clearbit's data powers
                our robust lead scoring system, which passes the right leads to our inbound sales team.
                </p>
            </div>

        </div>
    </div>
    </div>
)

export default growth;