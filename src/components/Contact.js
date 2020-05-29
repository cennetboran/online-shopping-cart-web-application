import React,{Component} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

class Contact extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-3">
                        <p className="text-contact" > Adresimiz</p>
                        <p className="text-name">İsim:</p>
                        <p className="text-explain" >Tırtıl.com</p>
                        <br/>
                        <p className="text-name">Adres:</p>
                        <p className="text-explain" >Adalet Mahallesi Manas Bulvarı No:47/B Folkart Towers A Kule K:26 D:2601</p>
                        <br/>
                        <p className="text-name">Ticaret Odası #:</p>
                        <p className="text-explain" >******************</p>
                        <br/>
                    </div>
                </div>

                <div className="bottom">
                <Footer/>
                </div>
                
            </div>
        )
    }
}export default Contact