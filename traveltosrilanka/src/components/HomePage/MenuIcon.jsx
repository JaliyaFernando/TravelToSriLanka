import React,{Component} from 'react';
import {Link} from "react-router-dom";

export default class MenuIcon extends Component{
    render(){
        return <div className="content">

            <Link to={this.props.link}>
                <img src={this.props.image} alt={this.props.name}/>
                <div className="desc">{this.props.name}</div>
            </Link>
        </div>
    }
}