import React from 'react'
import './Sales.css'
import growthpic from '../../../assets/img/sales.jpg'

const growth = (props) => (
    <div>
        <h1 style = {{margin:"40px 0",textAlign:"center",color: "rgb(80, 75, 75)"}}>
        Context to close more deals, more quickly
        </h1>
        <div className = "Growth">
        <div className = "card">
            <img src = {growthpic} alt = "growth"/>
            <div className = "context" style = {{textAlign:"initial"}}>
                <h2 style = {{color :"green"}}>Segment</h2>
                <p>
                Segment's sales reps save 15 hours per week on lead research. 
                With Clearbit integrated into Salesforce, they always have 
                complete company, geo, and demographic intelligence on leads before sales calls.
                </p>
            </div>

        </div>
        <div className = "grid">
            <div className = "Frame">
                <div className = "Title"><span className = "big">2700</span> new SQLs per week </div>
                <p>
                In less than a month, Intercom increased pipeline by 2700 
                sales qualified leads per week and decreased bounce rates.
                </p>
            </div>
            <div className = "Gong">
                <div className = "Title"><span className = "big">50%</span>  more signups</div>
                <p>
                After experiencing a 60% drop-off rate, 
                Livestorm improved conversion by 50% by shortening their signup form.
                </p>
                
            </div>
            <div className = "Prosify">
                <div className = "Title">The data we need for automation</div>
                <p>
                When a new account is created, we use Clearbit to enrich the record and then 
                1) lead routing based on location or industry, 2) lead scoring, 
                3) training machine learning models. 
                Clearbit stands out as having the most straight-forward, 
                elegant and well-documented sales data.
                </p>
            </div>

        </div>
    </div>
    </div>
)

export default growth;