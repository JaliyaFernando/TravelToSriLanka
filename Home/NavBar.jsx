import React,{Component} from 'react';

export default class NavBar extends Component{
    render(){
        return <ul className="topnav"><li><a href="#home">Home</a></li><li><a href="#map">Map</a></li><li><a href="#contact">Contact Us</a></li><li className="right"><a href="#about">About Us</a></li></ul>
    }
}