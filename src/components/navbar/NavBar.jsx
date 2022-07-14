import Logo from './navbarComponents/Logo'
import Links from './navbarComponents/Links'

import './styling/NavBar.css'

export default function NavBar(props){
    return(
        <div className="NavBar">
            < Logo />
            < Links things={props.links}/>
        </div>
    )
}