import React, { Component } from "react"
import "../App.css"
import 'whatwg-fetch';

import {
    getFromStorage,
    setInStorage
} from "./utils/storage"
import Admin from "./components/Admin";


class App extends Component {

    state = {
        isLoading : true,
        token: "",
        signUpError: "",
        signInError: "",
        signInEmail: "",
        signInPassword: "",

        
    }

    componentDidMount() {
        const obj = getFromStorage("the_main_app");
        
        if(obj){
            const token = obj.token;
            console.log(token)
            fetch("/signin/api/account/verify?token=" + token)
            .then(res=> res.json())
            .then(json =>{
                if(json.success){
                    this.setState({
                        token : token,
                        isLoading : false
                    })
                }else{
                    this.setState({
                        isLoading : false
                    })
                }
            })
        }else{
            this.setState({
                isLoading: false
            })
        }
    }

    onTexboxChangeSignInEmail =(event) =>{
        this.setState({
            signInEmail: event.target.value
        })
    }
    onTexboxChangeSignInPassword =(event) =>{
        this.setState({
            signInPassword: event.target.value
        })
    }

    onSignIn=()=>{
        const {
            signInEmail,
            signInPassword
        } = this.state

        this.setState({
            isLoading: true
        })

        fetch("/signin/api/account/signin",{
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
            })
        }).then(res => res.json())
            .then(json => {
                if(json.success) {
                    setInStorage("the_main_app", {token: json.token});
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInPassword: "",
                        signInEmail: "",
                        token: json.token,
                    })
                }else{
                    this.setState({
                        signInError: json.message,
                        isLoading: false
                    })
                    console.log(this.state.signInError)
                    
                }
            })
    }
    
    onLogout = () => {

        this.setState({
            isLoading : true
        });

        const obj = getFromStorage("the_main_app");
        
        if(obj){
            const token = obj.token;
            console.log(token)
            fetch("/signin/api/account/logout?token=" + token)
            .then(res=> res.json())
            .then(json =>{
                if(json.success){
                    this.setState({
                        token : null,
                        isLoading : false
                    })
                }else{
                    this.setState({
                        isLoading : false
                    })
                }
            })
        }else{
            this.setState({
                isLoading: false
            })
        }
    }

    render() {
        const {
            isLoading,
            token,
            signInEmail,
            signInError,
            signInPassword,
        } = this.state

        if(isLoading){
            return (<div><p>Loading...</p></div>)
        }

        if(!token){
            return(
                <div className="card card-size2">
                <form className="text-center border border-light p-5">
                    
                    <p className="h4 mb-4">Giriş Yap</p>

                    <input type="email" className="form-control mb-4" placeholder="Kullanıcı Adı" value={signInEmail} onChange={this.onTexboxChangeSignInEmail}/>

                    <input type="password" className="form-control mb-4" placeholder="Parola" value={signInPassword} onChange={this.onTexboxChangeSignInPassword}/>

                    <div className="d-flex justify-content-around">
                        
                    </div>

                    <button className="btn btn-info btn-block my-4" onClick={this.onSignIn}>Giriş Yap</button>

                </form>
            </div>
            )
        }

        return (
            <div>
                <Admin
                    onLogout={() => this.onLogout()}
                />
            </div>
        )
    }
} export default App