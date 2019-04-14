import React,{Component} from 'react';

export default class MyCartPageContent extends Component {
    render() {
        return (<div className="wrap" align="center">
            <h1>My Cart</h1>
            <table>
                <tr>
                    <th>Description<br/>Maliban Cream Cracker</th>
                    <th>Quantity: <br/>
                        1
                    </th>
                    <th>Discount: <br/>
                        Rs.0.00
                    </th>
                    <th>Total: <br/>
                        Rs.170.00
                    </th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Delivery charges to hotel:</td>
                    <td>Rs.10.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><b>Total:</b></td>
                    <td>Rs.180.00</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th width="30%">User Details</th>
                    <th width="30%">Hotel Details</th>
                    <th width="30%">Please Enter the coupon</th>
                </tr>
                <tr>
                    <td>User ID : V100034</td>
                    <td>Hotel ID : H00023</td>
                    <td align="center"><input type="password"/></td>
                </tr>
                <tr>
                    <td>User Name : Lakith</td>
                    <td>Location : Anuradapura</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Loyalty Point : 10.456</td>
                    <td>Current Total Amount 200,000/=</td>
                    <td align="center"><input type="submit" value="Confirm"/></td>
                </tr>
            </table>
        </div>);
    }
}