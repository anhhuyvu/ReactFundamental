import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = props => {
    return(
        <div style={{textAlign: 'center', background: "blue", padding: "10px 0"}}>
            <NavLink exact style ={{color : 'white', marginLeft:'20px'}} activeStyle={{color : 'black'}} to='/'>
                Product
            </NavLink>
            <NavLink exact style ={{color : 'white', marginLeft:'20px'}} activeStyle={{color : 'black'}} to='/profile'>
                Profile
            </NavLink>
        </div>
    )
}

export default Nav;