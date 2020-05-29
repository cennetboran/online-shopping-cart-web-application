import React, { Component } from "react"
import visa from "../images/visa.png"
import mastercard from "../images/mastercard.png"
import xIcon from "../images/xIcon.svg"

class CreditCard extends Component {
    render() {
        return (
            <div role="presentation" className="MuiDialog-root tirtil-dialog-root"
                style={{ position: "fixed", zIndex: "1300", right: "0px", bottom: "0px", top: "0px", left: "0px" }}>
                <div className="MuiBackdrop-root tirtil-backdrop" aria-hidden="true" style={{ opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}></div>
                <div tabIndex="0" data-test="sentinelStart"></div>
                <div className="MuiDialog-container MuiDialog-scrollPaper" role="none presentation" tabIndex="-1"
                    style={{ opacity: "1", transform: "none", transition: " opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
                    <div className="MuiPaper-root MuiDialog-paper tirtil-dialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded" role="dialog">
                        <div className="credit-card-form">
                            <div className="top-bar-container">
                                <div className="top-bar">
                                    <div className="left-comp">
                                        <div className="CloseButton" onClick={() => this.props.onCancel()}>
                                            <img src={xIcon} alt="..." />
                                        </div>
                                    </div>
                                    <div className="title ">Kredi Kartı Ekleyin</div>
                                    <div className="right-comp">
                                        <label htmlFor="done" className="DoneButton">Bitti</label>
                                    </div>
                                </div>
                                <div className="bottom-comp"></div>
                            </div>
                            <form>
                                <div className="cards-strip">
                                    <img className="card" alt="..." src={visa} />
                                    <img className="card" alt="..." src={mastercard} />
                                    <div className="spacer"></div>
                                </div>
                                <div className="form-label ">CARD DETAILS</div>
                                <div className="newAddressInputWrapper">
                                    <input className="FormInput newAddressFormStyle" type="text" name="cardNumber"
                                        placeholder="Kart Numarası" maxlength="16" required />
                                </div>
                                <div className="newAddressInputWrapper">
                                    <input className="FormInput newAddressFormStyle" type="text" name="date"
                                        placeholder="AA/YY"
                                        maxlength="5" required /></div>
                                <div className="newAddressInputWrapper">
                                    <input className="FormInput newAddressFormStyle" type="text" name="cvc"
                                        placeholder="CVC"
                                        maxlength="80" required/>
                                </div>
                                <div className="newAddressInputWrapper">
                                    <input className="FormInput newAddressFormStyle" type="text" name="email"
                                        placeholder="E-Mail" maxlength="80" required />
                                </div>
                                <input id="done" className="DummySubmit" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} export default CreditCard