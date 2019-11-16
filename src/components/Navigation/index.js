import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarClass: '',
            navbarToggle: true
        }
    }

    render() {
        const NavigationAuth = () => (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="nav-item nav-link text-light" to={ROUTES.HOME}>Tanner Driggers</Link>
                <button className="navbar-toggler" onClick={toggleNavbar} type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${this.state.navbarClass} navbar-collapse collapse`} id="navbar">
                    <ul className="navbar-nav ml-auto float-right">
                        <li className="nav-item text-right">
                            <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
                        </li>
                        <li className="nav-item text-right">
                            <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li className="nav-item text-right">
                            <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
                        </li>
                        <li className="nav-item text-right">
                            <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
                        </li>
                        <li className="nav-item text-right">
                            <SignOutButton className="nav-link text-right" />
                        </li>
                    </ul>
                </div>
            </nav>
        );

        const NavigationNonAuth = () => (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="nav-item nav-link text-light" to={ROUTES.HOME}>Tanner Driggers</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${this.state.navbarClass} collapse navbar-collapse`} id="navbar">
                    <ul className="navbar-nav ml-auto float-right">
                        <li className="nav-item text-right">
                            <Link className="nav-item nav-link text-light text-right" to={ROUTES.SIGN_IN}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );

        const toggleNavbar = () => {
            this.setState({
                navbarToggle: !this.state.navbarToggle,
                navbarClass: this.state.navbarToggle ? 'show' : ''
            });
        }

        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <NavigationAuth /> : <NavigationNonAuth />
                }
            </AuthUserContext.Consumer>
        );
    }
}

export default Navigation;