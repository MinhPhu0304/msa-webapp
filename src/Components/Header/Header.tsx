import * as React from 'react'
import './Header.css'

// passing props value to change the style of the component base on the state of parent component
export default function Header(props:any) {
    return (
        <div className="header" style={props.styleComponent.header}>
            <h1 className='headerText' style={ props.styleComponent.textColour}>How Old? 🤔</h1>
        </div>
    )
}