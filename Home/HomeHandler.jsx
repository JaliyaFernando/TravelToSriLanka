import React,{Component} from 'react';
import {render} from 'react-dom';

import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

export default class HomeHandler extends Component{
    render(){
        return <div>
            <Header/>
            <NavBar/>
            <Footer/>
        </div>
    }
}