import React ,{Component} from 'react';
import './Cart_item.css';
const cartItem = props=>{
    let items =props.CartItems.map(item=>{
        return(
            <tr>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
            </tr>
        )
    });

    return(
        <div className="items" >
            <h1>Items Ordered:</h1>
            <div ><center>
            <table border="1" className="table">

            <tr>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
            {items}
        </table>
        </center>
        </div>
        </div>

    )

}
export default cartItem;