import React,{Component} from 'react';
import {Link} from "react-router-dom";
import keells from "./images/keells.png";

export default class S_ItemsSelectPageContent extends Component {
    render() {
        return (<div class="wrap">
            <table width="100%">
                <tr>
                    <td width="50%">
                        <div align="left">
                            <h1>Super Market</h1>
                            <h3>All Categories</h3>
                            <select id="" >
                                <option value="">Select a categories</option>
                                <option value="buiscuit">Biscuits</option>
                                <option value="Baverages">Baverages</option>
                                <option value="fruits">Fruits</option>
                            </select>
                            <Link to="/BiscuitsPage">
                                <input type="submit" name="submit" value="submit"/>
                            </Link>
                        </div>
                    </td>
                    <td width="50%">
                        <div align="right">
                            <h3>Anuradhapura</h3><img src={keells} alt="keells" height="42" width="72"/>
        </div>
    </td>
    </tr>
    </table>
    </div>);
    }
}