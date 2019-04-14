import React,{Component} from 'react';
import {render} from 'react-dom';
import Content from "./HomeContent";

export default class HomeHandler extends Component{
    render(){
        return <div>
            <Content/>
        </div>
    }
}