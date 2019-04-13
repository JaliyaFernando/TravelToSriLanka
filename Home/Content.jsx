import React,{Component} from 'react';

import MenuIcon from './MenuIcon';
import IconData from './IconData';


export default class Content extends Component {
    render() {
        const icons = IconData.map(icon =><MenuIcon key={icon.id} link={icon.link} image={icon.image} name={icon.name}/>)
        console.log(icons);
        return (<div>
                {icons}
            </div>
        )
    }
}