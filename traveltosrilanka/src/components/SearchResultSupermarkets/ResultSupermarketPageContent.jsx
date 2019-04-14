import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import keells from "./images/keells.png";
import cargils from "./images/cargils.jpg";
import arpico from "./images/arpico.jpg";
import laugfs from "./images/laugfs.jpg";

export default class ResultSupermarketPageContent extends Component {
    render() {
        return (<div>
            <div className="wrap" align="center">
                <table>
                    <tr>
                        <td align="center">
                            <form method="post" action="resultSupermarket.html">
                                <h1 align="center">SuperMarkets</h1>
                                <p><b>Location:</b></p>
                                <select id={"thedropdown"} align="center">
                                    <option value="">Select a suppermarket</option>
                                    <option value="anuradhapura">Anuradhapura</option>
                                    <option value="galle">Galle</option>
                                    <option value="colombo">Colombo</option>
                                    <option value="kurunegala">Kurunegala</option>
                                    <option value="ampara">Ampara</option>
                                    <option value="badulla">Badulla</option>
                                    <option value="gampaha">Gampaha</option>
                                    <option value="hambanthota">Hambanthota</option>
                                    <option value="kandy">Kandy</option>
                                    <option value="jaffna">Jaffna</option>
                                </select>
                                <Link to="/SearchResultSupermarketsPage">
                                    <input type="submit" name="submit" value="submit"/>
                                </Link>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="wrap2">
                <form align="center">
                    <h1 align="center">SuperMarkets in Anuradhapura</h1>

                    <table width="100%" align="center">
                        <tr>
                            <td width="25%" align="center">
                                <Link to="/ItemsSelectPage">
                                    <img src={keells} alt="keells" height="42" width="72"/>
                                    <br/>
                                    <input type="submit" value="Keells"/>
                                </Link>
                            </td>
                            <td width="25%" align="center">
                                <h1><img src={cargils} alt="cargils" height="42" width="72"/><br/>
                                    <input type="submit" value="Cargills"/>
                                </h1>
                            </td>
                            <td width="25%" align="center">
                                <h1><img src={arpico} alt="arpico" height="42" width="72"/><br/><input type="submit" value="Arpico"/>
                                </h1>
                            </td>
                            <td width="25%" align="center">
                                <h1><img src={laugfs} alt="laugfs" height="42" width="72"/><br/><input type="submit" value="Laugh"/></h1>
                            </td>
                        </tr>
                    </table>
                </form>
            </div></div>);
    }
}