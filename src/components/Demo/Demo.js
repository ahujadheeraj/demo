import React from 'react'
import './Demo.css'

const demo = (props) =>(
    <div className = "demo">
        <div className = "demo-container">
            <div className = "left">
            <h2><p>See why the world’s best <br />companies use 
                Clearbit<br /> to become truly data-driven.</p></h2>
                
                    <div className = "demo-quote">
                        <p>
                        Integrating Clearbit was the biggest impact <br />investment of 
                        anything we’ve done to date.
                        </p>
                        <p>
                        <h3 style = {{color: "#6b90c0" ,fontWeight: "600",fontSize:"22px",margin:"2px" }}>Guillaume Cabane</h3>
                            VP of Growth, Drift
                        </p>
                    </div>
                
            </div>
            <div className = "right">
                <div className = "shadow">
                <h2 style = {{textAlign:"center",color:"rgb(251, 251, 251)"}}>Get Started</h2>
                <form>
                    <ul>
                        <li>
                        <label forHtml = "Email">Email</label>
                        </li>
                        <li>
                        <input type = "text" id = "Email" placeholder = "you@Company-email.com"/> 
                        </li>
                        <li>
                        <label forHtml = "message">Message</label>
                        </li>
                        <li>
                        <textarea id = "message" placeholder = "What are you hoping to accomplish?" />  
                        </li>
                        <li></li>
                        <li>
                            <button><b>REQUEST A DEMO</b></button>
                        </li>
                    </ul>
                    
                </form>
                </div>
            </div>
        </div>
    </div>
)

export default demo;