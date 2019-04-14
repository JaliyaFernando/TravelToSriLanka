import React,{Component} from 'react';
import {Link} from "react-router-dom";
import keells from "./images/keells.png";
import Krisko from "./images/a.jpg";
import CreamCracker from "./images/d.jpg";

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
                                <option value="buiscuit" selected>Biscuits</option>
                                <option value="Baverages">Baverages</option>
                                <option value="fruits">Fruits</option>
                            </select>
                            <h4>Grocery/Biscuits</h4>
                        </div>
                    </td>
                    <td width="50%">
                        <div align="right">
                            <h3>Anuradhapura</h3><img src={keells} alt="keells" height="42" width="72"/>
        </div>
    </td>
    </tr>
    </table>

    <div class="gallery">
        <Link to="/CartPage">
            <img src={CreamCracker} alt="CreamCracker" />
            <div className="desc">Cream Cracker 100g <b>Rs170.00</b><br/><input type="submit" name="submit" value="Add"/></div>
        </Link>
    </div>

    <div class="gallery">
            <a target="_blank" href="#Krisko">
            <img src={Krisko} alt="Krisko"/>
            </a>
        <div class="desc">Maliban Krisko 100g <b>Rs270.00</b><br/><input type="submit" name="submit" value="Add" /></div>
    </div>

    <div class="gallery">
            <a target="_blank" href="#Krisko">
            <img src={CreamCracker} alt="CreamCracker"/>
            </a>
        <div class="desc">Cream Cracker 200g <b>Rs300.00</b><br/><input type="submit" name="submit" value="Add" /></div>
    </div>

    <div class="gallery">
            <a target="_blank" href="#Krisko">
            <img src={Krisko} alt="Krisko"/>
            </a>
        <div class="desc">Maliban Krisko 200g <b>Rs250.00</b><br/><input type="submit" name="submit" value="Add" /></div>
    </div>
    </div>);
    }
}