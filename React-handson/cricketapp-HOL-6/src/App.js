import React,{Component} from 'react';
import ListOfPlayers from './ListOfPlayers/LitsOfPlayers';
import ScoreBelow70 from './ListOfPlayers/ScoreBelow70';
import OddPlayers from './IndianPlayers/OddPlayers';
import EvenPlayers from './IndianPlayers/EvenPlayers';
import { IndianPlayers } from './IndianPlayers/IndianPlayers';
import ListOfIndianPlayers from './IndianPlayers/ListOfIndianPlayers';
const players= [
  {name:'Virat',score:91},
  {name:'Malinga',score:54},
  {name:'Bumrah',score:85},
  {name:'Pujara',score:62},
  {name:'Kapil Dev',score:75},
  {name:'Yuvraj',score:88},
  {name:'Singh',score:78},
  {name:'Sharma',score:43},
  {name:'Dharma',score:46},
  {name:'Kurma',score:80},
  {name:'Karma',score:60}
];
const IndianTeam = [
  "Sachin1",
  "Dhoni2",
  "Virat3",
  "Rohit4",
  "Yuvraj5",
  "Raina6",
];

class App extends Component{
  render(){
    var flag = false;
    if(flag){
      return (
        <div>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <ScoreBelow70 players={players}/>
        </div>
      )
    } else{
      return (
        <div>
          <div>
            <h1>Indian Team</h1>
            <h1>Odd Players</h1>
            {OddPlayers(IndianTeam)}
            <hr/>
            <h1>Even Players</h1>
            {EvenPlayers(IndianTeam)}
          </div>
          <hr/>
          <div>
            <h1>List of Indian Players Merged</h1>
            <ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
          </div>
        </div>
      )
    }
  }
}
export default App;