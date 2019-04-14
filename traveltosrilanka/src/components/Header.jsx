import React,{Component} from 'react';
import logo from './images/logo.png';
import map from './images/MAP.jpg';
import cart from './images/cart.png';
export default class Header extends Component{
    render() {
        return <table>
            <tbody>
                <tr>
                    <td className="logo"><img src={logo} alt="logo" align="center"/></td>
                    <td className="hedding"><h1>Welcome to Sri<img src={map} alt="srilanka" align="center"/>Lanka</h1></td>
                    <td className="blank"></td>
                    <td className="login_cart"><h3><a href="#home">Login</a> | <a href="#home">Sign Up </a><img src={cart}  alt="cart"  align="center"/></h3></td>
                </tr>
            </tbody>
        </table>
    }
}
