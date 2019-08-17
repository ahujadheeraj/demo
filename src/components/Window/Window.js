import React from 'react'
import Growth from './Growth/Growth'
import Enterprise from './Enterprise/Enterprise'
import Sales from './Sales/Sales'
import './Window.css'


const window = (props) => (
    <div className = "window">
        <Growth />
        <Enterprise />
        <Sales />

    </div>
)

export default window;