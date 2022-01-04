import React, { Component } from 'react'
import '../styles/Transaction.css'

export default class Transaction extends Component {

    removeTransaction = () => {
        this.props.removeTra(this.props.transaction._id)
    }

    render() {
        return (
            <div className='transaction-container' >
                <div className='transaction' >
                    <div>{this.props.transaction.vendor}</div>
                    <div>{this.props.transaction.category}</div>
                    <div>{this.props.transaction.amount}</div>
                </div>
                <div className='btn-container'>
                    <a onClick={this.removeTransaction} className="waves-effect waves-light btn red darken-1">Delete<i className="material-icons right">delete</i></a>

                </div>
            </div>
        )
    }
}
