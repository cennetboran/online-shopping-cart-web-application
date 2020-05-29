import React, { Component } from "react";
import uuid from "react-uuid";
import filter1 from "../images/cleanIcon.svg";
import filter2 from "../images/everIcon.svg";
import filter3 from "../images/boldIcon.svg";
import filter4 from "../images/classicIcon.svg";
import backButton from "../images/backButton.svg";
import menu from "../images/menuIcon.svg";
import _ from "lodash";
import ReviewImg from "./ReviewImg";
import ReviewOptions from "./ReviewOptions";
import Checkout from "./Checkout";
import CheckoutMenu from "./CheckoutMenu";
import {liveHelp} from "./LiveHelpPlugin";


class Review extends Component {
  constructor(props) {
    super(props);
    this.currentFile = null;
  }

  state = {
    images: [],
    fileClicked: false,
    isCheckoutClicked: false,
    tileCount: 0,
    isMenuClicked : false,
    liveHelp : false,
    totalEarning: 0
  };

  componentDidMount(){
    console.log(this.props)
  }

  onLiveHelpClicked = () => {
    this.setState({
      liveHelp : !this.state.liveHelp
    })
  }

  onMenuClicked = () =>{
    this.setState({isMenuClicked : !this.state.isMenuClicked})
  }

  onCheckoutCancel = () => {
    this.setState({ isCheckoutClicked: false });
  };

  checkoutClicked = () => {
    this.setState({ isCheckoutClicked: true });
    this.setState({ tileCount: this.state.images.length });
    if(this.state.images.length === 1){
      this.setState({
        totalEarning : 30
      })
    }else if(this.state.images.length === 2){
      this.setState({
        totalEarning : 60
      })
    }else if(this.state.images.length === 3){
      this.setState({
        totalEarning : 75
      })
    }else if(this.state.images.length === 4){
      this.setState({
        totalEarning : 95
      })
    }else if(this.state.images.length === 5){
      this.setState({
        totalEarning : 100
      })
    }else if(this.state.images.length >= 6){
      var imageCount = this.state.images.length
      var last = imageCount - 5
      var lastEarning = last*15
      var totalEarning = lastEarning + 100
      this.setState({
        totalEarning : totalEarning
      })
    }
  };

  onDelete = () => {
    var files = this.state.images;
    console.log(this.state.images);
    console.log("onDelete() images state");
    var index = _.findIndex(files, { file: this.currentFile });
    console.log(index);
    files.splice(index, 1);
    if (files.length === 0) {
      var noTiles = document.getElementById("no-tiles");
      var tilesStrip = document.getElementById("tiles-strip");
      tilesStrip.className = "tiles-strip hidden";
      noTiles.className = "no-tiles-placeholder show";
    }
    this.setState({ images: files });
    console.log(this.state.images);
    this.setState({ fileClicked: false });
    this.currentFile = null;
  };
  onCancel = () => {
    this.setState({ fileClicked: false });
    this.currentFile = null;
  };

  fileClicked = (image) => {
    this.setState({ fileClicked: true });
    this.currentFile = image;
    console.log(this.currentFile);
    console.log("current file in file clicked");
  };
  onInputClick = () => {
    document.getElementById("file").value = null;
  };

  fileUploaded = () => {
    var noTiles = document.getElementById("no-tiles");
    noTiles.className = "no-tiles-placeholder hidden";

    var tiles = document.getElementById("tiles-strip");
    tiles.className = "tiles-strip";

    var file = document.querySelector("input[type=file]").files[0];
    if (file) {
      var _file = {
        id: uuid(),
        file: file,
      };
      var files = this.state.images;
      files.push(_file);
      this.setState({ images: files });
    }
  };

  filterSelection = () => {
    var btnContainer = document.getElementById("myButtonContainer");
    var btns = btnContainer.getElementsByClassName("filter-button");

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
      });
    }
    var btn = btnContainer.getElementsByClassName("selected");
    var black = document.getElementsByName("black");
    var white = document.getElementsByName("white");
    var preview = document.getElementsByName("preview");
    if (btn[0].innerText === "CLEAN") {
      for (i = 0; i < this.state.images.length; i++) {
        black[i].className = "frame hidden";
        white[i].className = "frame";
        preview[i].className = "preview";
      }
    } else if (btn[0].innerText === "EVER") {
      for (i = 0; i < this.state.images.length; i++) {
        black[i].className = "frame hidden";
        white[i].className = "frame";
        preview[i].className = "preview matting";
      }
    } else if (btn[0].innerText === "BOLD") {
      for (i = 0; i < this.state.images.length; i++) {
        black[i].className = "frame";
        white[i].className = "frame hidden";
        preview[i].className = "preview";
      }
    } else if (btn[0].innerText === "CLASSIC") {
      for (i = 0; i < this.state.images.length; i++) {
        black[i].className = "frame";
        white[i].className = "frame hidden";
        preview[i].className = "preview matting";
      }
    }
  };
  render() {
    return (
      <div className="review-order-page">
        <div className="top-bar-container no-bottom-margin">
          <div className="top-bar ">
            <div className="left-comp">
              <a className="BackButton" href="/getstarted">
                <img alt="..." src={backButton} />{" "}
              </a>{" "}
            </div>{" "}
            <div className="title ">Fotoğraf Çerçeveleri</div>{" "}
            <div className="right-comp" onClick = {this.onMenuClicked}>
              <div className="TirtilMenu">
                <img
                  alt="..."
                  className="menu-button "
                  src={menu}
                  aria-controls="tirtil-menu"
                  aria-haspopup="true"
                />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bottom-comp">
            <div id="myButtonContainer" className="filter-strip">
              <div
                className="filter-button selected"
                onClick={this.filterSelection}
              >
                <img alt="..." className="filter-image" src={filter1} />{" "}
                <div className="filter-name"> CLEAN </div>{" "}
              </div>
              <div className="filter-button" onClick={this.filterSelection}>
                <img alt="..." className="filter-image" src={filter2} />
                <div className="filter-name"> EVER </div>
              </div>
              <div className="filter-button" onClick={this.filterSelection}>
                <img alt="..." className="filter-image" src={filter3} />{" "}
                <div className="filter-name"> BOLD </div>{" "}
              </div>
              <div className="filter-button" onClick={this.filterSelection}>
                <img alt="..." className="filter-image" src={filter4} />{" "}
                <div className="filter-name"> CLASSIC </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div id="imgContainer" className="content">
          <div id="no-tiles" className="no-tiles-placeholder show">
            <div className="no-tiles-text"> Birkaç fotğraf seçin </div>
            <input
              type="file"
              accept="image/*"
              id="file"
              className="review-input"
              onChange={this.fileUploaded}
              onClick={this.onInputClick}
            />
            
            <label htmlFor="file" className="SquareUploadButton animated">
              <div className="plus-icon">
                <svg viewBox="0 0 37.76 38.93">
                  <path
                    className="plus-shape"
                    d="M21.22,0V17.2H37.76v4.39H21.22V38.93H16.54V21.59H0V17.2H16.54V0Z"
                  ></path>
                </svg>{" "}
              </div>{" "}
            </label>{" "}
          </div>
          <div id="tiles-strip" className="tiles-strip hidden">
            {this.state.images.map((image) => {
              console.log(image);
              return (
                <ReviewImg
                  key={image.id}
                  image={image.file}
                  onClick={(image) => this.fileClicked(image)}
                />
              );
            })}
            <label htmlFor="file" className="SquareUploadButton right-side">
              <div className="plus-icon">
                <svg viewBox="0 0 37.76 38.93">
                  <path
                    className="plus-shape-in"
                    d="M21.22,0V17.2H37.76v4.39H21.22V38.93H16.54V21.59H0V17.2H16.54V0Z"
                  ></path>{" "}
                </svg>{" "}
              </div>{" "}
            </label>{" "}
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-button-container">
            <div className="bottom-button" onClick={this.checkoutClicked}>
              {" "}
              Satın Al
            </div>
          </div>
        </div>{" "}
        {this.state.fileClicked ? (
          <ReviewOptions
            onClick={() => this.onCancel()}
            onCancel={() => this.onCancel()}
            onDelete={() => this.onDelete()}
          />
        ) : null}
        {this.state.isCheckoutClicked ? (
          <Checkout
            onCheckoutCancel={() => this.onCheckoutCancel()}
            tileCount={this.state.tileCount}
            totalEarning = {this.state.totalEarning}
          />
        ) : null}

        {
          this.state.isMenuClicked ?
          <CheckoutMenu
            onCancel = {() => this.onMenuClicked()}
            onLiveHelpClicked = {() => this.onLiveHelpClicked()}
          />
          :null
        }
        {
          this.state.liveHelp ? 
          <div className="live-help" dangerouslySetInnerHTML= {{__html: liveHelp}}></div>
          :null
        }
      </div>
    );
  }
}
export default Review;
