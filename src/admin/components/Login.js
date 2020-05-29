import React, { Component } from "react"


class Login extends Component {
    render() {
        return (
            <div className="card card-size2">
                <form className="text-center border border-light p-5" action="">

                    <p className="h4 mb-4">Giriş Yap</p>

                    <input type="username" id="username" className="form-control mb-4" placeholder="Kullanıcı Adı" />

                    <input type="password" id="password" className="form-control mb-4" placeholder="Parola" />

                    <div className="d-flex justify-content-around">
                        
                    </div>

                    <button className="btn btn-info btn-block my-4" >Giriş Yap</button>

                </form>
            </div>
        )
    }
} export default Login