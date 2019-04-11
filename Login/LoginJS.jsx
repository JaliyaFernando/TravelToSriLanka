import React from 'react';
import { Link } from 'react-router';

class LoginJS extends React.Component{
    constructor(){
        super();
        this.state={
            userName : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(

            <div className="wrapper fadeInDown">
                <div id="formContent">



                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Login"/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>

                        <input type="submit" className="fadeIn fourth" value="Register"/>

                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>

        )
    }


}export default LoginJS;