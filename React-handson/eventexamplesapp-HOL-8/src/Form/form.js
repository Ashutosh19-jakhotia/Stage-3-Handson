import React from 'react';
class Form extends React.Component{
    Submit=()=>{
        var a = parseInt(document.getElementById("amount").value);
        var b = document.getElementById("currency").value;
        alert("Converting to "+b+" Amount is "+a*a);
    }
    render(){
        return (
        <form>
          <table>
            <tbody>
            <tr>
              <td>Amount</td>
              <td><input id="amount" type="number"/></td>
            </tr>
            <tr>
              <td>Currency</td>
              <td><textarea id="currency"></textarea></td>
            </tr>
            <tr>
              <td></td>
              <td><input type='submit' onClick={this.Submit}/></td>
            </tr>
            </tbody>
          </table>
        </form>
        )
    }
}
export default Form;