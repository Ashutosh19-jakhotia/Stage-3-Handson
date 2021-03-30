import React,{Component} from 'react';
import './OfficeSpace.css';
class OfficeSpace extends Component{
    render(){
        let colors =[];
        return(
            this.props.itemName.map((office)=>{
                if(office.Rent<=60000){
                  colors.push("textRed");
                } else {
                  colors.push("textGreen");
                }
                return (
                    <div>
                        <img src={office.image} width="50%" height="35%" alt="Office Space"/>
                        <h1>Name: {office.Name}</h1>
                        <h3 className={colors[colors.length-1]}>Rent: Rs. {office.Rent}</h3>
                        <h3>Address: {office.Address}</h3>
                    </div>
                )
            })
        )
    }
}
export default OfficeSpace;