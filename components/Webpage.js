import React from 'react'
import FillerText from './FillerText'

export default class WebPage extends React.Component {
  render() {
    return(
        <div>
         <h1>The world's coolest webpage</h1>
         <FillerText />
         <FillerText />
       </div>
    )
  }
}
