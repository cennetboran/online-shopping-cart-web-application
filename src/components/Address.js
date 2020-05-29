import React, { Component } from "react";
import xIcon from "../images/xIcon.svg"

class Address extends Component {
  render() {
    return (
      <div role="presentation" className="MuiDialog-root tirtil-dialog-root"
        style={{ position: "fixed", zIndex: "1300", right: "0px", bottom: "0px", top: "0px", left: "0px" }}>
        <div className="MuiBackdrop-root tirtil-backdrop" aria-hidden="true" style={{ opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}></div>
        <div tabIndex="0" data-test="sentinelStart"></div>
        <div className="MuiDialog-container MuiDialog-scrollPaper" role="none presentation" tabIndex="-1"
          style={{ opacity: "1", transform: "none", transition: " opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
          <div className="MuiPaper-root MuiDialog-paper tirtil-dialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded" role="dialog">
            <div className="address-form">
              <div className="top-bar-container">
                <div className="top-bar">
                  <div className="left-comp">
                    <div className="CloseButton" onClick={() => this.props.onCancel()}>
                      <img src={xIcon} alt="..." />
                    </div>
                  </div>
                  <div className="title ">Adres Ekleyin</div>
                  <div className="right-comp">
                    <label htmlFor = "done" className="DoneButton">Bitti</label>
                  </div>
                </div>
                <div className="bottom-comp"></div>
              </div>
              <form>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">İsim Soyisim</div>
                  <input className="FormInput newAddressFormStyle" type="text" name="fullName" 
                  placeholder="" maxlength="80" required/>
                </div>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">Adres</div>
                  <input className="FormInput newAddressFormStyle" type="text" name="street" 
                  placeholder="Sokak, Cadde, Apartman Numarası"
                    maxlength="80"  required/></div>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">Adres 2</div>
                  <input className="FormInput newAddressFormStyle" type="text" name="address_2" 
                  placeholder="(Zorunlu Değil)"
                    maxlength="80"/>
                </div>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">Şehir</div>
                  <input className="FormInput newAddressFormStyle" type="text" name="city" 
                  placeholder="" maxlength="80" required/>
                </div>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">İlçe</div>
                  <input className="FormInput newAddressFormStyle" type="text" name="state" 
                  placeholder="" maxlength="80"required/>
                </div>
                <div className="newAddressInputWrapper">
                  <div className="InputLabel">Posta Kodu</div>
                  <input className="FormInput newAddressFormStyle" type="text"
                    name="zipCode" placeholder="" maxlength="80"required/>
                </div>
                <input id="done" className="DummySubmit" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Address;
