import React from 'react'
import './Container.css'
import Adt from '../../assets/img/adt.svg'
import Flipkart from '../../assets/img/flipkart.svg'
import Playment from '../../assets/img/playment.svg'
import Yourstory from '../../assets/img/yourstory.svg'
import Honda from '../../assets/img/honda.svg'


const container = (props) => (
    <div className = "container">
        <h1>You’re in good company.</h1>
        <div className = "line">
        <p>THE GOLD STANDARD FOR MODERN INCIDENT MANAGEMENT</p>
        <div className = "companies">
            <img src = {Adt} alt = "Adt"/>
            <img src = {Honda} alt = "honda"/>
            <img src = {Playment} alt = "playment"/>
            <img src = {Yourstory} alt = "yourstory"/>
            <img src = {Flipkart} alt = "flipkart"/>
        </div>
        </div>
    </div>
)

export default container;
