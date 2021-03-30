import React,{Component} from 'react';
import './App.css';
import OfficeSpace from './OfficeSpace/OfficeSpace';
class App extends Component{
  state={
    itemName:[
      {Name:"DBS",Rent:50000,Address:"Chennai",
        image:"https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"},
      {Name:"ABC",Rent:70000,Address:"Mumbai",
        image:"https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
      {Name:"XYZ",Rent:45000,Address:"Hyderabad",
        image:"https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
      {Name:"VJHVJG",Rent:65000,Address:"Bangalore",
        image:"https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"}
    ]
  }
  render(){
    const element ="Office Space"
    return (
      <div>
        <h1>{element}, at Affordable Range</h1>
        <div className="div1">
          <OfficeSpace itemName={this.state.itemName} />
        </div>
      </div>
    )
  }
}
export default App;