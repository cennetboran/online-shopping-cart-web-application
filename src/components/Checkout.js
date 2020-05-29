import React, { Component } from "react";
import addressIcon from "../images/addressIcon.svg";
import creditCardIcon from "../images/creditCardIcon.svg";
import Address from "./Address";
import CreditCard from "./CreditCard";

class Checkout extends Component {

  state={
    isAddressClicked : false,
    isCreditCardClicked : false
  }


  componentDidMount() {
    if (this.props.tileCount === 0) {
      var noneTiles = document.getElementById("none-tiles");
      var tiles = document.getElementById("yes-tiles");
      noneTiles.className = "summary-item";
      tiles.className = "OrderSummary hidden";
    } else if (this.props.tileCount > 0) {
      noneTiles = document.getElementById("none-tiles");
      tiles = document.getElementById("yes-tiles");
      noneTiles.className = "summary-item hidden";
      tiles.className = "OrderSummary";
    }
  }

  creditCardClicked = () =>{
    this.setState({isCreditCardClicked : true})
  }

  onCreditCardCancel = () => {
    this.setState({isCreditCardClicked : false})
  }

  onAddressCancel = () =>{
    this.setState({isAddressClicked : false})
  }

  addressClicked = () =>{
    this.setState({isAddressClicked : true})
  }
 

  render() {
    return (
      <div>
      <div role="presentation" className="MuiDrawer-root MuiDrawer-modal"
        style={{ position: "fixed", zIndex: "1300", right: "0px", bottom: "0px", top: "0px", left: "0px" }}>
        <div className="MuiBackdrop-root checkout-backdrop" aria-hidden="false"
          style={{ opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
        </div>
        <div tabIndex="0" data-test="sentinelStart"></div>
        <div className="MuiPaper-root MuiDrawer-paper checkout-paper no-scroll right-drawer MuiDrawer-paperAnchorRight MuiPaper-elevation16"
          tabIndex="-1" style={{ transform: "none", transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms" }}>
          <div className="checkout-sheet right-drawer">
            <div className="checkout-title"> Satın Al </div>
            <div className="checkout-content">
              <div className="sheet-button with-lower-text highlighted" onClick={this.addressClicked}>
                <div className="button-icon highlighted">
                  <img className="icon-image" alt="..." src={addressIcon}/>
                </div>
                <div className="text bold"> Adres Ekleyin </div>
              </div>
              <div className="sheet-button highlighted" onClick = {this.creditCardClicked}>
                <div className="button-icon highlighted">
                  <img className="icon-image" alt="..." src={creditCardIcon} />
                </div>
                <div className="text bold"> Ödeme Yöntemi </div>
              </div>
              <div className="separator"> </div>
              <div className="order-summary-container">
                <div id="yes-tiles" class="OrderSummary hidden">
                  <div className="summary-item">
                    <div className="text">
                      <span className="summary-text">
                        {this.props.tileCount} Resim
                      </span>
                    </div>
                    <div className="value">
                      {this.props.totalEarning}Lira
                    </div>
                  </div>
                  <div className="summary-item">
                    <div className="text">
                      <span className="summary-text"> Kargo </span>
                    </div>
                    <div className="value"> Bedava </div>
                  </div>
                  <div className="try-before-you-buy-separator"></div>
                  <div className="summary-item strong">
                    <div className="text">
                      <span className="summary-text"> Toplam </span>
                    </div>
                    <div className="value">
                      {this.props.totalEarning} Lira
                    </div>
                  </div>
                </div>
                <div id="none-tiles" className="summary-item">
                  <div className="text">
                    <span className="summary-text"> Birkaç Resim Seçin </span>
                  </div>
                  <div className="value"> </div>
                </div>
              </div>
              <div className="bottom-button-container">
                <div className="bottom-button"> Sipariş Ver </div>
                <br/>
                <div className="bottom-button" onClick={() => this.props.onCheckoutCancel()}> İptal</div>
              </div>
            </div>
          </div>
        </div>
        <div tabIndex="0" data-test="sentinelEnd"></div>
      </div>
      {
        this.state.isAddressClicked ? 
        <Address
          onCancel = {() => this.onAddressCancel()}
        />
        :null
      }
      {
        this.state.isCreditCardClicked ? 
        <CreditCard
          onCancel = {() => this.onCreditCardCancel()}
        />
        :null
      }
      </div>
    );
  }
}
export default Checkout;
