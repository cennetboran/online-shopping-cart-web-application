import React, { Component } from "react"
import menuTriangle from "../images/menuTriangle.png"

class CheckoutMenu extends Component {

    render() {
        return (
            <div role="presentation" className="MuiPopover-root tirtil-menu" onClick ={() => this.props.onCancel()}
            style={{position: "fixed", zIndex: "1300", right: "0px", bottom: "0px", top: "0px", left: "0px"}}>
                <div aria-hidden="true" style={{zIndex: "-1", position: "fixed", right: "0px", bottom: "0px", top: "0px", left: "0px", 
                backgroundColor: "transparent", webkitTapHighlightColor: "transparent"}}></div>
                <div tabIndex="0" data-test="sentinelStart"></div>
                <div className="MuiPaper-root MuiMenu-paper tirtil-menu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded" 
                    tabIndex="-1" style={{opacity: "1", transform: "none", 
                        transition: "opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms", 
                            top: "52px", left: "1187px", transformOrigin: "185px -7.5px"}}>
                                <ul className="MuiList-root MuiMenu-list MuiList-padding" role="menu" tabIndex="-1">
                                    <img className="menu-triangle" alt="..." src={menuTriangle} tabindex="0"/>
                                <li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root tirtil-menu-item MuiMenuItem-gutters 
                                    MuiListItem-gutters MuiListItem-button" tabIndex="-1" role="menuitem" aria-disabled="false" onClick={this.props.onLiveHelpClicked()}>
                                        Canlı Yardım
                                    <span className="MuiTouchRipple-root"></span></li>
                                    </ul>
                                    </div>
                            <div tabindex="0" data-test="sentinelEnd"></div>
                            </div>
        )
    }
}export default CheckoutMenu