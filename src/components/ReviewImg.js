import React, { Component } from "react"
import black from "../images/review/black.svg"
import white from "../images/review/white.svg"

class ReviewImg extends Component {
   

    componentDidMount(){
        var file = this.props.image
        var previews = document.getElementsByClassName("preview-image")
        console.log(previews)
        for(var i=0;i<previews.length;i++){
            var preview = previews[i];
            var reader = new FileReader();
            reader.onloadend = function () {
            preview.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        }else{
            preview.src = "";
        }
        }
        
    }   

    render() {
        return (
            <div className="tile" onClick = {() => this.props.onClick(this.props.image)}>
                <div className="tile-base"></div>
                <div id="preview" name="preview"className="preview" >
                    <img alt="..." className="preview-image" style={{ opacity: "1", height: "100%" }} src="..."></img>
                </div>
                <div id="tile-frame" className="tile-frame" >
                    <img alt="..." name="black" className="frame hidden" src={black}></img>
                    <img alt="..." name="white" className="frame" src={white}></img>
                </div>
            </div>


        )
    }
} export default ReviewImg