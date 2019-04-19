import * as React from 'react'
import Loader from 'react-loader-spinner'

interface IProps{
  result:string
  filelength:any
  textColour:any
}

export default class Result extends React.Component<IProps> {
  
  public render() {
    return (
      <div className="dank">
        {
          this.props.result === "" && this.props.filelength>0 ?
            <Loader type="ThreeDots" color="#62FF00" height={80} width={80} /> :
            <p  style={this.props.textColour}>{this.props.result}</p>
        }
      </div>
    )
  }
}