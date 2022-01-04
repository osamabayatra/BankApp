import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Operations.css'
export default class Operations extends Component {

    constructor() {
        super()
        this.state = {
            amount: '',
            vendor: '',
            category: ''
        }
    }

    notValidInput = () => {
        if (this.state.amount == '' ||
            this.state.amount == 0 ||
            this.state.vendor == '' ||
            this.state.category == '')
            return true

        return false
    }

    depositOperation = () => {

        if (this.notValidInput())
            return


        let data = {
            amount: this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category,
            type: 'deposit'
        }
        // console.log(data);

        this.props.operation(data)

    }


    withdrawOperation = () => {

        if (this.notValidInput())
            return

        let data = {
            amount: this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category,
            type: 'withdraw'

        }

        this.props.operation(data)
    }

    setAmount = (e) => {
        this.setState({ amount: e.target.value })
    }

    setVendor = (e) => {
        this.setState({ vendor: e.target.value })
    }

    setCategory = (e) => {
        this.setState({ category: e.target.value })
    }

    render() {
        return (
            <div>
                <div className='inputs'>
                    <h3>New Operation</h3>

                    <input value={this.state.amount} type="number" placeholder='Amount' onChange={this.setAmount} />
                    <input value={this.state.vendor} type="text" placeholder='Vendor' onChange={this.setVendor} />
                    <input value={this.state.category} type="text" placeholder='Category' onChange={this.setCategory} />
                    <div className='buttons'>
                        <button onClick={this.depositOperation} className='deposit'>Deposit</button>
                        <button onClick={this.withdrawOperation} className='withdraw'>Withdraw</button>
                    </div>
                </div>

            </div>
        )
    }
}
