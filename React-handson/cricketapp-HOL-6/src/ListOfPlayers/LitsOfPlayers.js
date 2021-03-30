import React,{Component} from 'react';
class ListOfPlayers extends Component{
    render(){
        return(
            this.props.players.map((player)=>{
                return (
                    <div>
                        <li>Mr. {player.name}<span> {player.score} </span></li>
                    </div>
                )
            })
        )
    }
}
export default ListOfPlayers;