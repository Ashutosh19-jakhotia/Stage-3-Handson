import React,{Component} from 'react';
import ListOfPlayers from './LitsOfPlayers';
class ScoreBelow70 extends Component{
    render(){
        var players70 = new Array;
        this.props.players.map((player)=>{
            if(player.score<=70){
                players70.push(player);
                
            }
        })
        return(
            <div>
                <ListOfPlayers players={players70} />
            </div>
        )
    }
}
export default ScoreBelow70;