import * as React from 'react';

import DropArea from './Components/DropArea/DropArea'
import Header from './Components/Header/Header'
import Result from './Components/Result/Result'
import style from './Components/styleMode/styleMode';
import ThemeTogle from './Components/ThemeTogle/ThemeToggle'

import './App.css'

interface IState {
  result:string
  filelength:number
  style:any
  darkMode:boolean
}

class App extends React.Component<{},IState>{

    public constructor(props:any){
      super(props)
      this.state = {
        darkMode:true,
        filelength:0,
        result:"",
        style:style.darkMode,
      }
    }

    // call back to ensure the style will be set after boolean flag has been updated
    public setStyle = ()=>{
      this.setState({style:this.state.darkMode ? style.darkMode : style.lightMode },this.changeBackGroundColor)
     
    }
    
    // another callback to ensure the background color will change after the style has been set
    public changeBackGroundColor= ()=>{
      document.body.style.backgroundColor=this.state.style.pageBackGroundColour.backgroundColor;
    }

    public onChangeSwitch = (checked:boolean) =>{
      this.setState((state)=> ({darkMode : !state.darkMode}),this.setStyle);
    }

    public resultstate = (resultString:string,filelen:any) => {
      this.setState({result:resultString,filelength:filelen})
    }
    
    public render() {

      return (
        <div className="content">
          <Header styleComponent={this.state.style}/>
          <ThemeTogle onChangeSwitch={this.onChangeSwitch}  checkedState={this.state.darkMode} textStyle={this.state.style.textColour}/>
          <DropArea setResults={this.resultstate} styleComponent={this.state.style}/>
          <Result result={this.state.result} filelength={this.state.filelength} />
        </div>
      );
    }


}

export default App;
