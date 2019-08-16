import React from 'react'
import './Head.css'

const head = (props) =>(
    <div className = "head">
        <div className = "head-left">
            <div className = "subhead">
                Reliability is never an accident.
            </div>
            <h2>
            Incident Response - The SRE Way.
            </h2>
            
            <div className = "content">
                Uplevel your Incident Management with
                the next generation Reliability Orchestration 
                Engine based on Site Reliability Engineering (SRE)
            </div>
            
            <div className = "btn">
            <button>Try it for free</button>
            <button>Schedule a demo</button>
            </div>
            
        </div>

        <div className = "head-right">

        </div>

    </div>
)

export default head;