import React,{Component} from 'react';
import {Link} from "react-router-dom";

export default class SupermarketPageContent extends Component {
    render() {
        return (<div className="wrap" align="center">
                <table>
                    <tr>
                        <td align="center">
                            <form method="post" action="resultSupermarket.html">
                                <h1 align="center">SuperMarkets</h1>
                                <p><b>Location:</b></p>
                                <select id="thedropdown" align="center">
                                    <option value="">Select a suppermarket</option>
                                    <option value="anuradhapura">Anuradhapura</option>
                                    <option value="galle">Galle</option>
                                    <option value="colombo">Colombo</option>
                                    <option value="kurunegala">Kurunegala</option>
                                    <option value="ampara">Ampara</option>
                                    <option value="badulla">Badulla</option>
                                    <option value="gampaha">Gampaha</option>
                                    <option value="hambanthota">Hambanthota</option>
                                    <option value="kandy">Kandy</option>
                                    <option value="jaffna">Jaffna</option>
                                </select>
                                <Link to="/SearchResultSupermarketsPage">
                                    <input type="submit" name="submit" value="submit"/>
                                </Link>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>);
    }
}