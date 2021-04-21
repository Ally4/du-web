import React, { Component } from 'react';
import { menuItems } from './MenuItems';

export default class Navbar extends Component {

    state = {
        clicked:false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked ? 'fa fa-wrench' : 'fa fa-twitter'}></i></div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {menuItems.map((item, index) => {
                    return (
                    <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                    )
                })}
                </ul>
            </nav>
        )
    }
}
