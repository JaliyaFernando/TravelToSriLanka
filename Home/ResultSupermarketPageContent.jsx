import React,{Component} from 'react';

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
                                <a target="_blank" href="resultSupermarket.html">
                                    <input type="submit" name="submit" value="submit"/>
                                </a>
                            </form>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="wrap2">
                <form align="center">
                    <table>
                        <h1 align="center">SuperMarkets in Anuradhapura</h1>
                        <tr>
                            <td><a target="_blank" href="AllCategories.html">
                                <h1><img src="images\keells.png" height="42" width="72"/>
                                    <br/>
                                    <input type="submit" value="Keells"/>
                                </h1></a>
                            </td>
                            <td>
                                <h1><img src="images\cargils.jpg" height="42" width="72"/><br/>
                                    <input type="submit" value="Cargills"/>
                                </h1>
                            </td>
                            <td>
                                <h1><img src="images\arpico.jpg" height="42" width="72"/><br/><input type="submit" value="Arpico"/>
                                </h1>
                            </td>
                            <td>
                                <h1><img src="images\laugfs.jpg" height="42" width="72"/><br/><input type="submit" value="Laugh"/></h1>
                            </td>
                        </tr>
                    </table>
                </form>
            </div></div>);
    }
}