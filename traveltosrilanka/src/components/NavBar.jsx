import React,{Component} from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component{
    render(){
        return <ul className="topnav">
            <li><Link to="/HomePage">Home</Link></li>
            <li><Link to="/SupermarketsPage">Map</Link></li>
            <li><a href="#contact">Contact Us</a></li>
            <li className="right"><a href="#about">About Us</a></li>
        </ul>
    }
}