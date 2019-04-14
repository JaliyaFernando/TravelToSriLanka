import React,{Component} from 'react';
import {Link} from "react-router-dom";
import CreamCracker from "./images/d.jpg";

export default class CartPageContent extends Component {
    render() {
        return (<div className="wrap">
                <table cellSpacing="30">
                    <tr>
                        <th align="left"><h3>My Shopping Cart</h3></th>
                    </tr>
                    <tr>
                        <td>
                            <div className="gallery">
                                <a target="_blank" href="d.jpg">
                                    <img src={CreamCracker} alt="CreamCracker"/>
                                </a>
                            </div>

                        </td>
                        <td>
                            <b><p>Maliban Cream Cracker 100g</p></b>

                            <b><p>Unit Price: Rs170.00</p></b>
                        </td>
                        <td>
                            <b><p>Quantity</p></b>
                            <b><p>01</p></b>
                        </td>
                        <td>
                            <b><p>Discount</p></b>
                            <b><p>Rs0.00</p></b>
                        </td>
                        <td>
                            <b><p>Total</p></b>
                            <b><p>Rs170.00</p></b>
                        </td>
                        <td>
                            <Link to="/MyCartPage">
                                <input type="submit" name="submit" value="Confirm"/>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>);
    }
}