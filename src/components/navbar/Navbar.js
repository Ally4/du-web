import React, { Component } from 'react';
import { menuItems } from './MenuItems';
import Logo from '../logo/logo'

export default class Navbar extends Component {

    state = {
        clicked:false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="Naviba">
                <h1 className="nalo"><Logo /><i className="fab fa-react"></i></h1>
                <div className="meni" onClick={this.handleClick}><i className={this.state.clicked ? 'fa fa-wrench' : 'fa fa-twitter'}></i></div>
                <ul className={this.state.clicked ? 'name active' : 'name'}>
                {menuItems.map((item, index) => {
                    return (
                    <li key={index}><a className={item.cName} href={item.njiya}>{item.jina}</a></li>
                    )
                })}
                </ul>
            </nav>
        )
    }
}
