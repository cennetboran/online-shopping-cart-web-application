import React, { Component } from "react"
import logo from "../../images/logo.png";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="center margin-top">
                    <img className="nav-home" src={logo} alt="..." />
                    <h2>Admin</h2>
                </div>
                {/* <button onClick={this.props.onLogout}>Çıkış Yap</button> */}
            </div>
                
        )
    }
} export default Navbar