import React,{Component} from 'react';
import logo from './logo.png';
import map from './MAP.jpg';
import cart from './cart.png';
export default class Header extends Component{
    render() {
        return <table>
            <tbody>
                <tr>
                    <td className="logo"><img src={logo} align="center"/></td>
                    <td className="hedding"><h1>Welcome to Sri<img src={map} align="center"/>Lanka</h1></td>
                    <td className="blank"></td>
                    <td className="login_cart"><h3><a href="#home">Login</a> | <a href="#home">Sign Up </a><img src={cart} align="center"/></h3></td>
                </tr>
            </tbody>
        </table>
    }
}
