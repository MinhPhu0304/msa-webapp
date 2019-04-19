import * as React from 'react'
import Switch from 'react-switch';
import './ThemeTogle.css'

export default function ThemeTogle(props:any){
    return (
        <div    className="switchDiv">
            
            <h1  className="switchText" style={props.textStyle}>Change theme</h1>
            
            <Switch onChange={props.onChangeSwitch} checked={props.checkedState}
                    uncheckedIcon={false}
                    checkedIcon={false}/>
        </div>
    )
}
