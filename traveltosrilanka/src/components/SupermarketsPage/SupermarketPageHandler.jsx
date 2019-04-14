import React,{Component} from 'react';
import {render} from 'react-dom';
import Content from "./SupermarketPageContent";


export default class SupermarketPageHandler extends Component{
    render(){
        return <div>
            <Content/>
        </div>
    }
}