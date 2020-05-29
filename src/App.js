import React, {Component} from 'react';
import './App.css';
import logo from "./images/logo.png";
import 'react-multi-carousel/lib/styles.css';
import StarRatings from 'react-star-ratings';
import Carousel from "./components/Carousel"
import Footer from './components/Footer';

class App extends Component {

  render(){
    
    return (
      <div className="fluid">
        <div className="center margin-top">
          <img className="nav-home" src={logo} alt="..."/> 
        </div>
        <br/>
        <div className="center">
          <p className = "home-header" >Fotoğraflarınızı uygun fiyatlı ve çarpıcı <br/> tablolara dönüştürün</p>
        </div>
        <div className="video-center">
        <iframe src="https://fast.wistia.net/embed/iframe/5fmw8t9342" title=" [Example Video] Wistia Video Essentials" allowtransparency="true" 
            frameBorder="0" scrolling="no" className="wistia_embed video-center" name="wistia_embed"
                allowFullScreen mozallowfullscreen = "true" webkitallowfullscreen="tru" oallowfullscreen="true" msallowfullscreen="true" width="800" height="450">
                </iframe>
        </div>
        <br/>
        <div className="card">
          <div className="card-body">
            <p className="center text-pricing"> Sadece 30 liraya </p>
            <p className="center text-shipping">Kargo her zaman bedava</p>
        </div>
      </div>
      
      <br/>
        <p className="center text-millions">Milyonlarca Tablo Satıldı</p>
        <p className="center text-gracing">HER TÜRLÜ DUVARI SÜSLÜYOR</p>
        <br/>
            <Carousel/>
        <br/>
        <br/>
        
      <div className="card">
          <div className="card-body">
            <p className="center text-one-size"> Tek ve mükemmel boyutta </p>
            <p className="center text-removable">Çerçeveler 20cm X 20cm. Taşınabilir, tekrar kullanılabilir <br/>ve hiç iz bırakmaz.</p>
        </div>
      </div>
      <br/>
      <div className = "center">
       <StarRatings
          rating={4.5}
          starRatedColor="rgb(155,226,96)"
          starDimension = "30px"
          numberOfStars={5}
          name='rating'
        />
        <h6 className="text-green">4.5 YILDIZ, 10,000+ YORUM</h6>
      </div>
      <br/>
      <p className="center text-love-product">Ürünlerimizi çok seveceksiniz yada paranızı geri iade edeceğiz.</p>

      <br/>
      <br/>
      <Footer/>
      



      <div className="card bottom">
        <div className="card-body">
          <a href="/getstarted" type="button" className="btn btn-color waves-effect waves-light center-button rad">Resimlerinizi Yükleyin</a>
        </div>
      </div>
  

      <div style={{marginBottom: "150px"}}>

      </div>

      </div>
      );




  }
  
}

export default App;
