import React, { Component } from "react"
import backButton from "../images/backButtonWhite.svg";
import menu from "../images/menuIconWhite.svg";
import Review from "./Review"

class GetStarted extends Component {

    state={
        option : ""
    }

    onOptionClick1=()=>{
        this.setState({
                option : "myself"
            })
            return (
                <Review
                    option = {this.state.option}
                />
            )
    }
    onOptionClick2=()=>{
        this.setState({
                option : "gift"
            })
    }

    render() {
        const {
            option
        } = this.state

        if(option === "myself"){
            return(
                <Review
                    option = {option}
                />
            )
        }

        if(option === "gift"){
            return(
                <Review
                    option = {option}
                />
            )
        }

        return (
            <div className="NewEmailCapturePage">
                <div className="top-bar-container no-bottom-margin invert">
                    <div className="top-bar ">
                        <div className="left-comp">
                            <div className="BackButton">
                                <a href="/"><img style={{fill: "#ffffff"}} src={backButton} className="invert" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-comp">
                    </div>
                </div>
                <div className="content">
                    <div className="bg-layer">
                        <div className="bg-circle"></div>
                    </div>
                    <div className="step-1-wrapper visible">
                        <h2>Kimin İçin Alıyorsunuz?</h2>
                        <div className="options">
                            <div className="option" onClick={this.onOptionClick1}>
                                <div className="img for-me"></div>
                                <div>
                                    <h3>Kendim İçin</h3>
                                    <p>Kendi duvarlarımı süslüyorum</p>
                                </div>
                            </div>
                            <div className="option" onClick={this.onOptionClick2}>
                                <div className="img for-gift">
                                </div><div>
                                    <h3>Başkası İçin</h3>
                                    <p>Hediye Alıyorum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} export default GetStarted