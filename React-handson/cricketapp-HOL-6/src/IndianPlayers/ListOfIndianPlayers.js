import React,{Component} from 'react';
class ListOfIndianPlayers extends Component{
    render(){
        return(
            this.props.IndianPlayers.map((player)=>{
                return (
                    <div>
                        <li>Mr. {player} </li>
                    </div>
                )
            })
        )
    }
}
export default ListOfIndianPlayers;