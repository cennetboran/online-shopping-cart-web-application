import React, { Component } from "react"

class JobContent extends Component {
    render() {

        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div>
                                <h5 class="card-title text-pricing">{this.props.jobTitle}</h5>
                                <p class="card-text text-shipping">{this.props.jobContent}</p>
                            </div>
                            <div style={{ marginLeft: "auto" }}>
                                <a href={this.props.jobURL} class="btn btn-color waves-effect waves-light rad">Apply</a>
                            </div>

                        </div>


                    </div>
                </div>
                <br/>
            </div>
        )
    }
} export default JobContent