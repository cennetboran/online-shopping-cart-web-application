import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="center-row">
          <a href="/career" style={{ marginRight: "20px" }}>
            <p className="link">KARİYER</p>
          </a>
          <a href="/terms-of-use" style={{ marginRight: "20px" }}>
            <p className="link">KULLANIM ŞARTLARI</p>
          </a>
          <a href="/privacy-policy" style={{ marginRight: "20px" }}>
            <p className="link">GİZLİLİK POLİTİKASI</p>
          </a>
          <a href="/contact">
            <p className="link">İLETİŞİM</p>
          </a>
        </div>
        <br />
        <div className="center-row">
          <a href="https://www.facebook.com/tirtilcom" rel="noopener noreferrer" target="_blank" style={{ marginRight: "20px" }}>
            <i className="fab fa-facebook-square fa-lg icon-color"></i>
          </a>
          <a href="https://www.instagram.com/tirtilcom/" rel="noopener noreferrer" target="_blank" style={{ marginRight: "20px" }}>
            <i className="fab fa-instagram-square fa-lg icon-color"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCKyeqv9ql4s1F_2wl6C1t_w" rel="noopener noreferrer" target="_blank" style={{ marginRight: "20px" }}>
            <i className="fab fa-youtube fa-lg icon-color"></i>
          </a>
          <a href="https://twitter.com/tirtilcom" rel="noopener noreferrer" target="_blank" style={{ marginRight: "20px" }}>
            <i className="fab fa-twitter-square fa-lg icon-color"></i>
          </a>
          <a href="https://www.linkedin.com/company/tirtilcom/" rel="noopener noreferrer" target="_blank" >
            <i className="fab fa-linkedin fa-lg icon-color"></i>
          </a>
        </div>
        <br />
        <div className="center">
          <p className="text-copyright">
            Telif Hakkı © 2020 tırtıl.com – Tüm Hakları Saklıdır
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
