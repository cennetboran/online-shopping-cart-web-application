import React,{Component} from "react"
import Navbar from "./Navbar"
import Sidebar from "./SideBar"

class Admin extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Sidebar
                    onLogout = {()=>this.props.onLogout()}
                />
            </div>
        )
    }
}export default Admin