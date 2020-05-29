import React, { Component } from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import FileViewer from "react-file-viewer"
import terms from "../politikalar/tırtıl.com_Kullanım_Şartları.docx"

class TermsOfUse extends Component {
    render() {

        return (

            <div>
                <Navbar />
                <h4 className="priv-pol-head center">Kullanım Şartları</h4>
                <div className="grid-container">
                    <div></div>
                    <div>
                        <FileViewer
                            fileType = "docx"
                            filePath = {terms}
                        />
                    </div>
                </div>
                <br />
                <Footer />
                <br />
                <br />
            </div>
        );
    }
} export default TermsOfUse