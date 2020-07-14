import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar';


class ErrorPage extends Component {
    render() {
        return (
            <div>
                
                Please Login As :
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Organizer
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/loginuser" className="nav-link">
                        Client
                    </Link>
                </li>
            </ul>
            </div>
            
            
        );
    }
}

export default ErrorPage ;
