import React,{Component} from 'react';
import {render} from 'react-dom';

import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Content from "./SupermarketPageContent";


export default class SupermarketPageHandler extends Component{
    render(){
        return <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        <Header/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavBar/>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <Content/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Footer/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    }
}