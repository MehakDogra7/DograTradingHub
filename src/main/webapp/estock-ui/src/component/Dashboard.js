import React, {Component} from "react";
import GenerateGraph from "./GenerateGraph";
import {Link} from "react-router-dom";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stocksToShow: [],
            numberOfDays: 0,
            isLoading: true
        }
        this.handleClick = this.handleClick.bind(this)
        this.setStateToFalse = this.setStateToFalse.bind(this)
    }

    async componentDidMount() {

        console.log("Inside component did mount")
        this.setState({
                stocksToShow: await require('../data_and_config/StockToShow.json')["Stocks"],
                numberOfDays: await require('../data_and_config/StockToShow.json')["NumberOfDays"]
            }, () => this.setStateToFalse()
        )
    }

    handleClick(event) {
        const {value} = event.target
        this.setState({
            isLoading: true,
            numberOfDays: value
        })
    }

    setStateToFalse() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        console.log("Inside Render")
        if (this.state.isLoading) {
            return (
                <div/>
            )
        }
        let currCanvas = this.state.stocksToShow.map(
            (stock, index) =>
                <div>
                    <GenerateGraph
                        name={stock}
                        numberOfDays={this.state.numberOfDays}
                        key={index}
                    />
                </div>
        )


        return (
            <div >
                <div className="NAV">
                    <nav>
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check" className="checkBtn">
                            <i className="fas fa-bars"/>
                        </label>
                        <label className="logo">Dogra Trading Hub</label>
                        <ul>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="SiteLinks">
                    <ul>
                    <li><a href="https://eaccount.indiainfoline.com?ReferralEmpId=B/YRMKHFx587gPyxoteOIQ==&IsZ20Scheme=PWFawC7VFMmiW4Oysu+Kwg==">IIFL Securities</a></li><br/>
                    <li><a href="https://kyc.swastika.co.in/customer/login/2F7540B348">Swastika</a></li>
                    </ul>
                </div>
                <div className="stock">
                    {this.state.isLoading ? this.setStateToFalse() :
                        <div>
                            {currCanvas}
                        </div>}
                </div>
            </div>
        );
    }

}

export default Dashboard
