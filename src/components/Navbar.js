import React, { Component } from "react"
import logo from "../images/logo.png"

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <a href="/"><img className="navbar-logo" src={logo} alt="..." /></a>
                    <div className="nav-items">
                        <a href="/career" style={{ marginRight: "20px", marginLeft:"auto"}}><h5 className="link nav-item">KARİYER</h5></a>
                        <a href="/terms-of-use" style={{ marginRight: "20px" }}><h5 className="link nav-item">KULLANIM ŞARTLARI</h5></a>
                        <a href="/privacy-policy" style={{ marginRight: "20px" }}><h5 className="link nav-item">GİZLİLİK POLİTİKASI</h5></a>
                        <a href="/contact"><h5 className="link nav-item">İLETİŞİM</h5></a>
                    </div>
                </div>
            </div>
        );
    }
} export default Navbar