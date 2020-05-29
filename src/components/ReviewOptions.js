import React, { Component } from "react"

class ReviewOptions extends Component {
    render() {
        return (
            <div onClick={()=> this.props.onClick()} role="presentation" className="MuiDrawer-modal"
                style={{position: "fixed", zIndex: "1300", right: "0px", bottom: "0px", top: "0px", left: "0px"}}>
                <div className="MuiBackdrop-root" aria-hidden="true"
                    style={{opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}}>
                </div>
                <div tabIndex="0" data-test="sentinelStart">
                </div>
                <div className="MuiPaper-root MuiDrawer-paper adjust-tile-drawer MuiDrawer-paperAnchorBottom MuiPaper-elevation16"
                    tabIndex="-1" style={{transform: "none" , transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"}}>
                    <div className="adjust-tile-buttons">
                        <div className="dialog-button highlighted" onClick={() => this.props.onDelete()}>Kaldır</div>
                        <div className="dialog-button gray" onClick={() => this.props.onCancel()}>İptal</div>
                    </div>
                </div>
                <div tabIndex="0" data-test="sentinelEnd">
                </div>
            </div>
        )
    }
} export default ReviewOptions