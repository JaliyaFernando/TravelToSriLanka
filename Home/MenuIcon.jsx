import React,{Component} from 'react';

export default class MenuIcon extends Component{
    render(){
        return <div className="content">
            <a target="_blank" href="{this.props.link}">
                <img src={this.props.image} alt={this.props.name}/>
                <div className="desc">{this.props.name}</div>
            </a>
        </div>
    }
}