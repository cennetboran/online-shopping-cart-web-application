import React, { Component } from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import gizlilik from "../politikalar/tırtıl.com_Gizlilik_Politikası.docx"
import FileViewer from "react-file-viewer"
class PrivacyPolicy extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <h4 className="priv-pol-head center">Gizlilik Politikası</h4>
                <div className="grid-container">
                    <div></div>
                    <div>
                        <FileViewer
                            fileType = "docx"
                            filePath = {gizlilik}
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
} export default PrivacyPolicy