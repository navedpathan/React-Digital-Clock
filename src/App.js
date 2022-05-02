import './App.css';
import Fdate from './functionalDate'
import Cdate from './classDate'
import Ctime from './classTime';
import Ftime from './functionalTime'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
      <div className="container">
        <h1><Fdate /></h1>
        <h1><Cdate /></h1>
        <h1><Ctime /></h1>
        <h1><Ftime/></h1>
        </div>
      </>
    )
  }
}

// import React from 'react';
// export default function App() {
// let time = new Date().toLocaleTimeString();
// const [Ctime, setCtime] = useState(time)
// setInterval(() => {
//       time = new Date().toLocaleTimeString();
//       setCtime(time);
//   }, 1000);
//    // setInterval(updateTime, 1000);
//    return (
//       <div>{Ctime}</div>
//     )
//   }