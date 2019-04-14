import React, { Component } from 'react';
import './App.css';
import './style.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/main';


class App extends Component {
  render() {
    return (<div>
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
                <Main/>
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
    );
  }
}

export default App;
